import { create } from 'zustand';

interface SearchTermStoreState {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export const useSearchTermStore = create<SearchTermStoreState>((set) => ({
  searchTerm: '',
  setSearchTerm: (value) => set({ searchTerm: value }),
}));
