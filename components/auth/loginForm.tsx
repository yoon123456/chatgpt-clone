"use client";
import { useFormValidate } from "@/hooks/useFormValidate";
import { ChangeEvent, useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import FormCard from "./formCard";
import FormField from "./formField";
import Submit from "./submit";
import { ILoginFormError } from "@/types/login";
import { LoginSchema } from "@/schemas/auth";
import { login } from "@/actions/login";

const LoginFrom = () => {
	const [error, action] = useActionState(login, undefined);
	const { errors, validateField } =
		useFormValidate<ILoginFormError>(LoginSchema);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		validateField(name, value);
	};

	useEffect(() => {
		if (error?.errorMessage) {
			toast.error(error.errorMessage);
		}
	}, [error]);

	return (
		<FormCard
			title="로그인"
			footer={{ label: "아직 계정이 없으신가요?", href: "/signup" }}
		>
			<form action={action} className="space-y-6">
				<FormField
					id="email"
					name="email"
					type="email"
					label="이메일"
					placeholder="example@example.com"
					error={errors?.email}
					onChange={handleChange}
				/>
				<FormField
					id="password"
					name="password"
					type="password"
					label="비밀번호"
					placeholder="************"
					error={errors?.password}
					onChange={handleChange}
				/>
				<Submit className="w-full">로그인</Submit>
			</form>
		</FormCard>
	);
};

export default LoginFrom;
