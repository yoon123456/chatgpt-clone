import React from "react";
import { Button } from "../ui/button";

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ISubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const Submit = ({ children, ...others }: ISubmitProps) => {
	return (
		<Button type="submit" {...others}>
			{children}
		</Button>
	);
};

export default Submit;
