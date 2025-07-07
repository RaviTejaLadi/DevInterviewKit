import { BookOpen, Laptop, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from 'kalki-ui';

const features = [
  {
    icon: BookOpen,
    title: '📚 Comprehensive Resources',
    description: 'Deep dives into each topic with real-world examples and best practices from industry experts.',
  },
  {
    icon: Laptop,
    title: '💻 Hands-on Challenges',
    description: 'Practical coding challenges for frontend, backend, and data structures & algorithms.',
  },
  {
    icon: MessageCircle,
    title: '🗣️ Interview Simulation',
    description: 'Common questions with structured answers and communication strategies for technical discussions.',
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-12 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Key Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            Why Choose DevInterviewKit?
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="mt-4 text-lg font-medium text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-base text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
