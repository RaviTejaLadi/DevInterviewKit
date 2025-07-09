import { Skeleton } from '@/components/ui/skeleton';

export default function MockInterviewsSkeleton() {
  // Reusable components
  const Header = () => (
    <div className="text-center mb-12">
      <Skeleton className="w-80 h-12 bg-slate-800 rounded mx-auto mb-4" />
      <Skeleton className="w-96 h-6 bg-slate-800 rounded mx-auto" />
    </div>
  );

  const SectionTitle = () => (
    <div className="flex items-center space-x-4 mb-8">
      <Skeleton className="w-12 h-12 bg-slate-800 rounded-lg" />
      <div>
        <Skeleton className="w-24 h-8 bg-slate-800 rounded mb-2" />
        <Skeleton className="w-32 h-4 bg-slate-700 rounded" />
      </div>
    </div>
  );

  const QuizCard = ({ titleWidth }: { titleWidth: string }) => (
    <div className="bg-slate-900 rounded-lg overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="w-8 h-8 bg-slate-800 rounded" />
          <div className="text-right">
            <Skeleton className="w-8 h-8 bg-slate-800 rounded mb-1" />
            <Skeleton className="w-16 h-4 bg-slate-700 rounded" />
          </div>
        </div>
        <Skeleton className={`h-8 bg-slate-800 rounded ${titleWidth}`} />
      </div>
      <div className="p-6 pt-0 space-y-3">
        <Skeleton className="w-full h-4 bg-slate-800 rounded" />
        <Skeleton className="w-3/4 h-4 bg-slate-800 rounded" />
        <div className="flex items-center space-x-2 pt-2">
          <Skeleton className="w-4 h-4 bg-slate-700 rounded" />
          <Skeleton className="w-20 h-4 bg-slate-700 rounded" />
        </div>
      </div>
    </div>
  );

  const QuizGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <QuizCard titleWidth="w-16" />
      <QuizCard titleWidth="w-12" />
      <QuizCard titleWidth="w-20" />
      <QuizCard titleWidth="w-18" />
      <QuizCard titleWidth="w-14" />
      <QuizCard titleWidth="w-16" />
    </div>
  );

  return (
    <div className="min-h-screen bg-inherit text-white">
      <div className="max-w-7xl mx-auto p-8">
        <Header />
        <div className="mb-12">
          <SectionTitle />
          <QuizGrid />
        </div>
      </div>
    </div>
  );
}
