"use server";

import { getUserByEmail } from "@/data/user";
import db from "@/db/db";
import { user } from "@/db/schema";
import { SignUpSchema } from "@/schemas/auth";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export const signUp = async (_: unknown, formData: FormData) => {
	// 1. 유효성 검사
	const validateFields = SignUpSchema.safeParse({
		name: formData.get("name"),
		email: formData.get("email"),
		password: formData.get("password"),
	});

	if (!validateFields.success) {
		return {
			errorMessage: "잘못된 입력값이 있습니다.",
		};
	}
	// 2. 존재하는 사용자인지 체크
	const { email, name, password } = validateFields.data;
	try {
		const existingUser = await getUserByEmail(email);
		if (existingUser) {
			return {
				errorMessage: "이미 존재하는 사용자 입니다.",
			};
		}

		// 3. 비밀번호 암호화
		const hashedPassword = await bcrypt.hash(password, 10);

		// 4. insert db
		await db.insert(user).values({ name, email, password: hashedPassword });
	} catch (e) {
		console.error(e);
		return {
			errorMessage: "문제가 발생했습니다.",
		};
	}
	redirect("/login");
};
