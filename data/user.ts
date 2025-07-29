import db from "@/db/db";
import { user } from "@/db/schema";
import { User } from "@/types/db";
import { eq } from "drizzle-orm";

export const getUserByEmail = async (email: string): Promise<User | null> => {
	try {
		const existingUser = await db.query.user.findFirst({
			where: eq(user.email, email),
		});

		if (!existingUser) {
			return null;
		}

		return existingUser;
	} catch (e) {
		console.error(e);
		throw new Error("문제가 발생했습니다.");
	}
};
