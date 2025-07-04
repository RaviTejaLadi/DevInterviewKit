import MachineCodingNav from '@/components/MachineCodingNav';
import { Outlet } from 'react-router-dom';
import PreviewSheet from '@/components/PreviewSheet';
// import { usePreviewSheetStore } from '@/stores/usePreviewSheetStore';
// import { Button } from 'kalki-ui';
// import { cn } from '@/lib/utils';

const MachineCodingPage = () => {
  // const { open, setOpen } = usePreviewSheetStore();
  return (
    <>
      {/* <Button
        variant={'outline'}
        onClick={() => setOpen(true)}
        className={cn(open ? '' : 'fixed top-28 right-10 z-[999]')}
      >
        Show Preview
      </Button> */}
      <MachineCodingNav />
      <div className="container pt-4">
        <Outlet />
      </div>
      <PreviewSheet />
    </>
  );
};

export default MachineCodingPage;
