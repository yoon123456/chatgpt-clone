import React from "react";
import { Button } from "../ui/button";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface ISubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const Submit = ({ children, ...others }: ISubmitProps) => {
	const { pending } = useFormStatus();
	return (
		<Button type="submit" disabled={pending} {...others}>
			{children}
		</Button>
	);
};

export default Submit;
