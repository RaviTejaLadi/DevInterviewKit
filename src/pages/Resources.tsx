import ResourcesContentSkeleton from '@/components/skeletons/ResourcesContentSkeleton';
import { lazy, Suspense } from 'react';

// Lazy load the ResourcesContent component
const ResourcesContent = lazy(() => import('@/features/resources/components'));

const Resources = () => {
  return (
    <Suspense fallback={<ResourcesContentSkeleton />}>
      <ResourcesContent />
    </Suspense>
  );
};

export default Resources;
