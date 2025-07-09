import MockInterviewsSkeleton from '@/components/skeletons/MockInterviewsSkeleton';
import { lazy, Suspense } from 'react';

// Lazy load the QuizApp component
const QuizApp = lazy(() => import('@/features/mockInterviews/components'));

const MockInterviews = () => {
  return (
    <div className="container">
      <Suspense fallback={<MockInterviewsSkeleton />}>
        <QuizApp />
      </Suspense>
    </div>
  );
};

export default MockInterviews;
