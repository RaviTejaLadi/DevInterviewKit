import { useShowAlertHandler } from '@/hooks/useShowAlertHandler';
import { useAlertDialogStore } from '@/stores/useAlertDialogStore';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { useShallow } from 'zustand/react/shallow';

interface DialogWrapperProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  onOpenChangeFn: () => void;
  isFormDirty?: boolean;
}

const DialogWrapper = ({ onOpenChangeFn, isFormDirty, ...props }: DialogWrapperProps) => {
  // Get alert dialog store state
  const { isAlertDialogOpen } = useAlertDialogStore(
    useShallow((state) => ({
      isAlertDialogOpen: state.isAlertDialogOpen,
    }))
  );

  // Get show unsaved changes alert dialog handler
  const { showDefaultAlertDialog } = useShowAlertHandler();

  return (
    <DialogPrimitive.Root
      onOpenChange={() => {
        // Return if alert dialog is open
        if (isAlertDialogOpen) return;

        // If form is dirty, show alert dialog
        if (isFormDirty) {
          showDefaultAlertDialog({
            confirmActionFn: () => onOpenChangeFn(),
            alertType: 'unsaved',
          });
        } else {
          // Toggle dialog open state
          onOpenChangeFn();
        }
      }}
      {...props}
    />
  );
};

DialogWrapper.displayName = DialogPrimitive.Root.displayName;

export { DialogWrapper };
