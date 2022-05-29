import create from "zustand";

const useStore = create((set)=>({
    isModalOpen: [false, false, false],
    setIsModalOpen: () => set((state) => ({ isDark: !state.isDark })),
}))