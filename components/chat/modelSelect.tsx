"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useModelStore } from "@/store/model";

const MODELS = ["gpt-3.5-turbo", "gpt-4", "gpt-4o"];

export function ModelSelect() {
	const currentModel = useModelStore((s) => s.model);
	const updateModel = useModelStore((s) => s.updateModel);

	return (
		<Select value={currentModel} onValueChange={updateModel}>
			<SelectTrigger className="w-[180px] border-none text-xl shadow-none focus:ring-0 focus:ring-transparent focus-visible:ring-0 focus-visible:ring-transparent">
				<SelectValue placeholder="모델 선택" />
			</SelectTrigger>
			<SelectContent>
				{MODELS.map((model) => (
					<SelectItem
						key={model}
						value={model}
						disabled={currentModel === model}
					>
						{model}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
