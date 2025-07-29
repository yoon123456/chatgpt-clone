"use client";
import React, { ChangeEvent, useActionState, useEffect } from "react";
import FormCard from "./formCard";
import Submit from "./submit";
import { useFormValidate } from "@/hooks/useFormValidate";
import { SignUpSchema } from "@/schemas/auth";
import { ISIgnUpFormError } from "@/types/form";
import { signUp } from "@/actions/signUp";
import toast from "react-hot-toast";
import FormField from "./formField";

const SignUpForm = () => {
	const [error, action] = useActionState(signUp, undefined);
	const { errors, validateField } =
		useFormValidate<ISIgnUpFormError>(SignUpSchema);

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
			title="회원가입"
			footer={{ label: "이미 계정이 있으신가요?", href: "/login" }}
		>
			<form action={action} className="space-y-6">
				<FormField
					id="name"
					name="name"
					type="text"
					label="이름"
					placeholder="이름을 입력해 주세요"
					error={errors?.name}
					onChange={handleChange}
				/>
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
				<Submit className="w-full">가입하기</Submit>
			</form>
		</FormCard>
	);
};

export default SignUpForm;
