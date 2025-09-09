import { FloatingShapes } from '@/components/FloatingShapes';
import { cn } from '@/lib/utils';
import { buttonVariants } from 'kalki-ui';

const HeroSection = () => {
  return (
    <div className="bg-muted/80 text-foreground">
      <FloatingShapes />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-[3rem] font-extrabold text-primary tracking-tight sm:text-5xl lg:text-6xl">
            Master Your Full-Stack Interview Journey
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
            Access comprehensive resources, interactive coding challenges, and expert-curated content designed to
            elevate your technical interview performance and land your dream job.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <a href="/resources" className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}>
              Explore Resources
            </a>
            <a href="/mock-assessment" className={cn(buttonVariants({ variant: 'primary', size: 'sm' }), 'text-white')}>
              Start Challenge
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
