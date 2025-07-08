import { create } from 'zustand';

type State = {
  isAlertDialogOpen: boolean;
  confirmActionFn: () => void;
  isDestructive?: boolean;
  title?: string;
  description?: string;
  cancelBtnText?: string;
  confirmBtnText?: string;
};

type Actions = {
  setAlertDialogState: (alertOptions: State) => void;
  toggleAlertDialogOpen: (value?: boolean) => void;
};

export const useAlertDialogStore = create<State & Actions>((set) => ({
  isAlertDialogOpen: false,
  confirmActionFn: () => {},
  isDestructive: true,
  title: 'Are you absolutely sure?',
  description: 'This action cannot be undone. Are you sure you want to continue?',
  cancelBtnText: 'Cancel',
  confirmBtnText: 'Yes, continue',
  setAlertDialogState: (alertOptions) =>
    set((state) => ({
      ...state,
      ...alertOptions,
    })),
  toggleAlertDialogOpen: (value) =>
    set((state) => ({
      ...state,
      isAlertDialogOpen: typeof value === 'boolean' ? value : !state.isAlertDialogOpen,
    })),
}));
