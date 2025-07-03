import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import { ClockIcon } from 'lucide-react';

const ComingSoonPage = () => {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-16">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="flex items-center justify-center rounded-full bg-blue-50 p-6" aria-hidden="true">
          <RocketLaunchIcon className="h-16 w-16 text-primary" />
        </div>

        <div className="flex items-center justify-center space-x-4 text-muted-foreground" aria-live="polite">
          <ClockIcon className="h-5 w-5" aria-hidden="true" />
          <span className="text-sm">Component under development</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground"> Page is Coming Soon</h1>

          <p className="mx-auto max-w-md text-lg text-muted-foreground">
            We&apos;re currently working on developing the component. Stay tuned for exciting updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
