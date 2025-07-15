import { create } from 'zustand';

interface SearchDialogStore {
  isSearchDialogOpen: boolean;
  setIsSearchDialogOpen: (value: boolean) => void;
  toggleSearchDialog: () => void;
}

export const useOpenSearchDialog = create<SearchDialogStore>((set) => ({
  isSearchDialogOpen: false,
  setIsSearchDialogOpen: (value) => set({ isSearchDialogOpen: value }),
  toggleSearchDialog: () => set((state) => ({ isSearchDialogOpen: !state.isSearchDialogOpen })),
}));
