import { Skeleton } from '@/components/ui/skeleton';

export default function ResourcesContentSkeleton() {
  // Reusable skeleton components
  const TextLine = ({ width }: { width: string }) => <Skeleton className={`h-5 bg-slate-800 rounded ${width}`} />;

  const SectionHeader = ({ width = 'w-24' }: { width?: string }) => (
    <Skeleton className={`h-3 bg-slate-700 rounded ${width} mb-2`} />
  );

  const MenuItem = ({ widths }: { widths: string[] }) => (
    <div className="space-y-2">
      {widths.map((width, i) => (
        <div key={i} className="flex items-center space-x-2">
          <Skeleton className="w-4 h-4 bg-slate-700 rounded" />
          <Skeleton className={`h-4 bg-slate-800 rounded ${width}`} />
        </div>
      ))}
    </div>
  );

  const Paragraph = ({ lines }: { lines: number }) => (
    <div className="space-y-4">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="flex flex-wrap items-center gap-2">
          <TextLine width="w-24" />
          <TextLine width="w-20" />
          <TextLine width="w-28" />
          <TextLine width="w-36" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-background border-r border-slate-800">
        <div className="p-4 space-y-6">
          {/* Logo/Header */}
          <div className="flex items-center space-x-3 mb-8">
            <Skeleton className="w-8 h-8 rounded-full bg-slate-800" />
            <Skeleton className="w-28 h-5 bg-slate-800 rounded" />
          </div>

          {/* Search */}
          <Skeleton className="w-full h-9 bg-slate-800 rounded-md" />

          {/* Sections */}
          <div className="space-y-6">
            <div>
              <SectionHeader width="w-24" />
              <MenuItem widths={['w-20']} />
              <div className="ml-6 space-y-2">
                <Skeleton className="w-24 h-4 bg-slate-800 rounded" />
                <Skeleton className="w-32 h-4 bg-slate-800 rounded" />
                <Skeleton className="w-28 h-4 bg-slate-800 rounded" />
              </div>
            </div>

            <div>
              <SectionHeader width="w-32" />
              <MenuItem widths={['w-20']} />
            </div>

            <div>
              <SectionHeader width="w-20" />
              <MenuItem widths={['w-16', 'w-12', 'w-24', 'w-20', 'w-18']} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-background">
        {/* Top Navigation */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="flex items-center space-x-8">
            <TextLine width="w-24" />
            <TextLine width="w-20" />
            <TextLine width="w-32" />
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="w-48 h-9 bg-slate-800 rounded-md" />
            <Skeleton className="w-8 h-8 bg-slate-800 rounded" />
            <Skeleton className="w-8 h-8 bg-slate-800 rounded" />
          </div>
        </div>

        <div className="p-8">
          {/* Main Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <Skeleton className="w-10 h-10 bg-slate-800 rounded-lg" />
              <Skeleton className="w-80 h-10 bg-slate-800 rounded" />
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <Skeleton className="w-4 h-4 bg-slate-700 rounded" />
                <TextLine width="w-28" />
                <TextLine width="w-64" />
                <TextLine width="w-48" />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <TextLine width="w-32" />
                <TextLine width="w-16" />
                <TextLine width="w-52" />
                <TextLine width="w-40" />
              </div>
              <TextLine width="w-72" />
            </div>
          </div>

          {/* Quote Section */}
          <div className="p-6 mb-16 rounded-r-lg">
            <Skeleton className="w-full max-w-2xl h-6 bg-slate-800 rounded" />
          </div>

          {/* Loading dots */}
          <div className="flex justify-center space-x-2 mb-16">
            {[600, 700, 700].map((shade, i) => (
              <Skeleton key={i} className={`w-2 h-2 bg-slate-${shade} rounded-full`} />
            ))}
          </div>

          {/* Why This Exists Section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Skeleton className="w-10 h-10 bg-slate-800 rounded-full" />
              <TextLine width="w-52" />
            </div>

            <Paragraph lines={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
