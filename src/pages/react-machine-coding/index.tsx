import MachineCodingNav from '@/components/MachineCodingNav';
import { Outlet, useParams } from 'react-router-dom';
import PreviewSheet from '@/components/PreviewSheet';
import { machineCodingExamplesData } from '@/data/Frontend/react-machine-coding/examples';
import { usePreviewSheetStore } from '@/stores/usePreviewSheetStore';
import { Button } from 'kalki-ui';
import { cn } from '@/lib/utils';

const MachineCodingPage = () => {
  const { id } = useParams();

  // Find the matching example data
  const example = machineCodingExamplesData.find((item) => item.id === id);

  const { open, setOpen } = usePreviewSheetStore();
  return (
    <>
      {example?.component && (
        <Button
          variant={'outline'}
          onClick={() => setOpen(true)}
          className={cn(open ? 'hidden' : 'fixed top-28 right-10 z-[999]')}
        >
          Show Preview
        </Button>
      )}
      <MachineCodingNav />
      <div className="container pt-4">
        <Outlet />
      </div>
      <PreviewSheet title={example?.title} component={example?.component} />
    </>
  );
};

export default MachineCodingPage;
