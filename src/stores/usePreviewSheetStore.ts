import { create } from 'zustand';

interface PreviewSheetStoreState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const usePreviewSheetStore = create<PreviewSheetStoreState>((set) => ({
  open: false,
  setOpen: (value) => set({ open: value }),
}));
