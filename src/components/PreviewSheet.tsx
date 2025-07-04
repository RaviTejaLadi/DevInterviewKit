import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { usePreviewSheetStore } from '@/stores/usePreviewSheetStore';
import { ReactNode } from 'react';

interface PreviewSheetProps {
  title?: string;
  component?: ReactNode;
}

const PreviewSheet: React.FC<PreviewSheetProps> = ({ title, component }) => {
  const { open, setOpen } = usePreviewSheetStore();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-auto border border-border">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription className="read-only">Machine coding examples</SheetDescription>
        </SheetHeader>
        <div className="px-4">{component}</div>
      </SheetContent>
    </Sheet>
  );
};

export default PreviewSheet;
