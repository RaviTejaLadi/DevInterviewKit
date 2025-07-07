import { cn } from '@/lib/utils';
import { buttonVariants } from 'kalki-ui';

const HeroSection = () => {
  return (
    <div className="bg-muted/80 text-foreground">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-primary tracking-tight sm:text-5xl lg:text-6xl">
            🚀 Your Ultimate Destination for Full-Stack Interview Success
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
            📚 A comprehensive collection of resources, interactive tools, and coding challenges to help you prepare for
            technical interviews.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <a href="/resources" className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}>
              🔎 Explore Resources
            </a>
            <a href="/mock-assessment" className={cn(buttonVariants({ variant: 'primary', size: 'sm' }))}>
              💻 Take a Challenge
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
