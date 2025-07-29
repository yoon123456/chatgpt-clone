import React from "react";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface IFormCard {
	title: string;
	footer: { label: string; href: string };
	children: React.ReactNode;
}

const FormCard = ({ title, footer, children }: IFormCard) => {
	return (
		<Card className="w-[500px] flex flex-col items-center border">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent className="w-[90%]">{children}</CardContent>
			<CardFooter>
				<Link className="text-sm text-sky-700" href={footer.href}>
					{footer.label}
				</Link>
			</CardFooter>
		</Card>
	);
};

export default FormCard;
