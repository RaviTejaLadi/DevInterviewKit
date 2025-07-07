import { cn } from '@/lib/utils';
import { buttonVariants } from 'kalki-ui';

const FinalQuoteSection = () => {
  return (
    <div className="bg-muted/25 text-foreground">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="block">Ready to ace your next interview? Start your journey today.</span>
          </h2>
          <p className="mt-4 text-xl leading-6 text-muted-foreground">
            Every pro was once an amateur. Every icon was once an unknown ⭐
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a href="/resources" className={cn(buttonVariants({ variant: 'light', size: 'sm' }))}>
                Start Your Journey Today 🚀
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalQuoteSection;
