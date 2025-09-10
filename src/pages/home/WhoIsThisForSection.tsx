import { Card, CardContent, CardHeader } from 'kalki-ui';
import { GraduationCap, User, Briefcase, Repeat } from 'lucide-react';

const cards = [
  {
    title: '🎓 New Graduates',
    description: 'Build the foundation needed to break into the industry.',
    icon: GraduationCap,
  },
  {
    title: '👨‍💻 Self-Taught Developers',
    description: 'Fill knowledge gaps and validate your skills.',
    icon: User,
  },
  {
    title: '💼 Experienced Engineers',
    description: 'Prepare for senior roles and system design interviews.',
    icon: Briefcase,
  },
  {
    title: '🔄 Career Switchers',
    description: 'Transition into full-stack development roles.',
    icon: Repeat,
  },
];

const WhoIsThisForSection = () => {
  return (
    <div className="py-12 bg-muted/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Who is this for?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            Designed for developers at every stage
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(({ title, description, icon: Icon }, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary">
                    <Icon size={20} />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="mt-4 text-lg font-medium text-foreground">{title}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsThisForSection;
