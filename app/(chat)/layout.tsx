import { Header } from "@/components/chat/header";
import { Sidebar } from "@/components/chat/sidebar";
import { ReactNode } from "react";

export default function ChatLayout({ children }: { children: ReactNode }) {
	return (
		<div className="md:flex h-full">
			{/* side bar 영역 */}
			<div className="hidden md:block w-[300px]">
				<Sidebar />
			</div>
			{/* header + chat 영역 */}
			<div className="flex flex-col flex-1 h-full overflow-y-auto">
				<Header />
				{children}
			</div>
		</div>
	);
}
