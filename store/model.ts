import { create } from "zustand";

type State = {
	model: string;
};

type Action = {
	updateModel: (firstName: State["model"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useModelStore = create<State & Action>((set) => ({
	model: "gpt-3.5-turbo",
	lastName: "",
	updateModel: (model) => set(() => ({ model: model })),
}));
