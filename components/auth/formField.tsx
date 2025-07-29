import { Label } from "../ui/label";
import { Input } from "../ui/input";
import FormMessage from "./formMessage";

interface IFormField {
	id: string;
	name: string;
	label: string;
	placeholder?: string;
	type: string;
	error?: string[];
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormField({
	id,
	name,
	label,
	placeholder,
	type,
	error,
	onChange,
}: IFormField) {
	return (
		<div className="space-y-1">
			<Label htmlFor={id}>{label}</Label>
			<Input
				id={id}
				name={name}
				type={type}
				placeholder={placeholder}
				error={!!error}
				onChange={onChange}
			/>
			{error && <FormMessage message={error[0]} />}
		</div>
	);
}
