import Image from "next/image";

export function Empty() {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full gap-5 ">
			<Image width={40} height={40} src="/logo.png" alt="logo" />
			<h3 className="text-xl md:text-2xl font-bold">무엇을 도와드릴까요?</h3>
		</div>
	);
}
