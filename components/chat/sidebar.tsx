import { BASE_URL, CHAT_ROUTES } from "@/constants/routes";
import { Logo } from "./logo";
import { Plus, MessageSquare } from "lucide-react";
import { SidebarItem } from "./sidebarItems";
import { Logout } from "./logout";

const DUMMY_ITEMS = [
	{
		id: "new",
		label: "새로운 대화",
		icon: <Plus />,
		href: BASE_URL,
	},
	{
		id: "1",
		label: "대화 예시 입니다. 대화 예시 입니다. 대화 예시 입니다.",
		icon: <MessageSquare />,
		href: `${CHAT_ROUTES.CONVERSATIONS}/1`,
	},
	{
		id: "2",
		label: "일 반 대화 입니다. 일반 대화 입니다. 일반 대화 입니다.",
		icon: <MessageSquare />,
		href: `${CHAT_ROUTES.CONVERSATIONS}/2`,
	},
];

export function Sidebar() {
	return (
		<nav className="h-full p-3 bg-black flex flex-col text-white">
			{/* 로고 영역 + 메뉴 아이템 */}
			<div className="flex-1 overflow-y-auto">
				<Logo />
				<div className="flex flex-col gap-2 mt-10">
					{DUMMY_ITEMS.map((item) => (
						<SidebarItem key={item.id} item={item} />
					))}
				</div>
			</div>
			{/* 로그아웃 버튼 영역 */}
			<div className="flex justify-center">
				<Logout />
			</div>
		</nav>
	);
}
