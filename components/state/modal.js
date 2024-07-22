import { create } from "zustand";

export const useModalStore = create((set) => ({
	isOpen: false,
	toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));