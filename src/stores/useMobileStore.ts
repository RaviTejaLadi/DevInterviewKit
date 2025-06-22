import { create } from 'zustand';

interface MobileStore {
  isMobileOpen: boolean;
  setIsMobileOpen: (value: boolean) => void;
  toggleMobile: () => void;
}

export const useMobileStore = create<MobileStore>((set) => ({
  isMobileOpen: false,
  setIsMobileOpen: (value) => set({ isMobileOpen: value }),
  toggleMobile: () => set((state) => ({ isMobileOpen: !state.isMobileOpen })),
}));
