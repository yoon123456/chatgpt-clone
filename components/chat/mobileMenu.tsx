"use client";
import { Menu } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
	SheetDescription,
} from "../ui/sheet";
import { Sidebar } from "./sidebar";
import { useSheetStore } from "@/store/sheet";

export function MobileMenu() {
	const open = useSheetStore((s) => s.open);
	const setOpen = useSheetStore((s) => s.setOpen);
	return (
		<div className="md:hidden">
			<Sheet open={open} onOpenChange={(open) => setOpen(open)}>
				<SheetTrigger asChild>
					<Menu />
				</SheetTrigger>
				<SheetContent side="left" className="p-0">
					<SheetTitle className="sr-only">Navigation</SheetTitle>
					<SheetDescription className="sr-only">
						Mobile navigation menu
					</SheetDescription>
					<Sidebar />
				</SheetContent>
			</Sheet>
		</div>
	);
}
