import { useAlertDialogStore } from '@/stores/useAlertDialogStore';
import { useShallow } from 'zustand/react/shallow';

interface DefaultOptions {
  confirmActionFn: () => void;
  alertType: 'delete' | 'delete-record' | 'delete-multiple' | 'disable-multiple' | 'unsaved';
  additionalText?: string;
}

interface CustomOptions {
  confirmActionFn: () => void;
  isDestructive: boolean;
  title: string;
  description: string;
  cancelBtnText?: string;
  confirmBtnText?: string;
}

const getOptionsBasedOnAlertType = ({ alertType, additionalText }: DefaultOptions) => {
  switch (alertType) {
    case 'delete':
      return {
        isDestructive: true,
        title: 'Delete?',
        description: 'This action cannot be undone. Are you sure you want to delete?',
        confirmBtnText: 'Yes, delete',
      };

    case 'delete-record':
      return {
        isDestructive: true,
        title: `Delete ${additionalText}?`,
        description: 'This action cannot be undone. Are you sure you want to delete this ${additionalText}?',
        confirmBtnText: 'Yes, delete ${additionalText}',
      };

    case 'delete-multiple':
      return {
        isDestructive: true,
        title: 'Delete ${additionalText}?',
        description:
          'This action cannot be undone. Do you want to permanently delete the selected ${additionalText.slice(additionalText.indexOf(" ") + 1)}?',
        confirmBtnText: 'Yes, delete',
      };

    case 'disable-multiple':
      return {
        isDestructive: false,
        title: 'Disable ${additionalText}?',
        description: 'Do you want to disable the selected ${additionalText.slice(additionalText.indexOf(" ") + 1)}?',
        confirmBtnText: 'Yes, disable',
      };

    case 'unsaved':
      return {
        isDestructive: true,
        title: 'Discard changes?',
        description: 'You have unsaved changes. Are you sure you want to leave and discard them?',
        confirmBtnText: 'Yes, discard changes',
      };

    default:
      return {} as CustomOptions;
  }
};

export const useShowAlertHandler = () => {
  const { setAlertDialogState } = useAlertDialogStore(
    useShallow((state) => ({
      setAlertDialogState: state.setAlertDialogState,
    }))
  );

  const showDefaultAlertDialog = (defaultOptions: DefaultOptions) => {
    setAlertDialogState({
      isAlertDialogOpen: true,
      confirmActionFn: defaultOptions.confirmActionFn,
      ...getOptionsBasedOnAlertType(defaultOptions),
    });
  };

  const showCustomAlertDialog = (customOptions: CustomOptions) => {
    // Set alert dialog state
    setAlertDialogState({
      isAlertDialogOpen: true,
      ...customOptions,
    });
  };

  return {
    showDefaultAlertDialog,
    showCustomAlertDialog,
  };
};
