import { Button, Card, CardContent } from 'kalki-ui';
import { ChevronLeft } from 'lucide-react';

interface NoQuestionsFallbackProps {
  goToHome: () => void;
}
const NoQuestionsFallback = ({ goToHome }: NoQuestionsFallbackProps) => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground mb-4">No questions available for this quiz.</p>
            <Button onClick={goToHome} variant="outline" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NoQuestionsFallback;
