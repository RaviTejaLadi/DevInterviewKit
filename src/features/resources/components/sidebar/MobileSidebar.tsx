import { useMobileStore } from '@/stores/useMobileStore';
import Logo from '../../../../components/Logo';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ReactNode } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

interface MobileSidebarProps {
  sidebarContent: ReactNode;
}

const MobileSidebar = ({ sidebarContent }: MobileSidebarProps) => {
  const { isMobileOpen, setIsMobileOpen } = useMobileStore();
  return (
    <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
      <SheetContent side="left" className="w-80 p-0 border border-border">
        <SheetHeader className="px-4 py-2 border-b border-border">
          <SheetTitle className="text-left">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-screen">{sidebarContent}</ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
