import { create } from 'zustand';

export const useSideMenuStore = create((set) => ({
  menuActive: false,
  menuClosing: false,
  toggleActive: () => set((state) => ({
    menuActive: !state.menuActive,
    menuClosing: state.menuActive,
  })),
  setMenuActive: (active) => set({ menuActive: active }),
  setMenuClosing: (closing) => set({ menuClosing: closing }),
}));