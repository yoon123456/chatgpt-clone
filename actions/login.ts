"use server";

import { getUserByEmail } from "@/data/user";
import { LoginSchema } from "@/schemas/auth";
import bcrypt from "bcryptjs";
import { createSession } from "./sessions";
import { redirect } from "next/navigation";

export const login = async (_: unknown, formData: FormData) => {
	const validateFields = LoginSchema.safeParse({
		email: formData.get("email"),
		password: formData.get("password"),
	});

	if (!validateFields.success) {
		return {
			errorMessage: "잘못된 입력값이 있습니다.",
		};
	}
	// 2. 존재하는 사용자인지 체크
	const { email, password } = validateFields.data;

	try {
		const existingUser = await getUserByEmail(email);
		if (!existingUser) {
			return {
				errorMessage: "존재하지 않는 사용자입니다. 회원가입을 해주세요.",
			};
		}
		const { id, name, password: userPassword } = existingUser;
		const passwordMatch = await bcrypt.compare(password, userPassword);
		if (!passwordMatch) {
			return {
				errorMessage: "비밀번호가 일치하지 않습니다.",
			};
		}

		await createSession({ id, name });

		// 세션 생성
	} catch (e) {
		console.error("error", e);
	}
	redirect("/");
};
