import { Button, Card, CardContent, CardFooter } from 'kalki-ui';
import { Award, ChevronLeft, Clock, Play, Target, Zap } from 'lucide-react';
import { formatTime } from '../utils/formatTime';

interface QuizReportProps {
  score: number;
  timeTaken: number;
  maxStreak: number;
  percentage: number;
  backToHome: () => void;
  retakeQuiz: () => void;
}
const QuizReport = ({ score, percentage, timeTaken, maxStreak, backToHome, retakeQuiz }: QuizReportProps) => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-2xl border-0 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
            <div className="text-center">
              <Award className="w-20 h-20 mx-auto mb-4 text-yellow-300" />
              <h2 className="text-4xl font-bold mb-2">Quiz Complete!</h2>
              <p className="text-xl opacity-90">Outstanding performance!</p>
            </div>
          </div>

          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <Target className="w-12 h-12 mx-auto mb-3 text-green-600" />
                <div className="text-3xl font-bold text-green-600 mb-1 truncate">{score}</div>
                <div className="text-muted-foreground">Score</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <Zap className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <div className="text-3xl font-bold text-blue-600 mb-1">{percentage}%</div>
                <div className="text-muted-foreground">Accuracy</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <Clock className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                <div className="text-3xl font-bold text-purple-600 mb-1 truncate">{formatTime(timeTaken)}</div>
                <div className="text-muted-foreground">Time Taken</div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Performance Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-background rounded-lg">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <div>
                    <div className="font-semibold text-foreground">Max Streak</div>
                    <div className="text-sm text-muted-foreground">{maxStreak} correct answers in a row</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-background rounded-lg">
                  <Zap className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="font-semibold text-foreground">Average Time</div>
                    <div className="text-sm text-muted-foreground">{Math.round(timeTaken)}s per question</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <div className="text-2xl font-bold text-foreground mb-2">
                  {percentage >= 90
                    ? '🎉 Exceptional!'
                    : percentage >= 75
                    ? '🚀 Great Job!'
                    : percentage >= 60
                    ? '👍 Good Work!'
                    : '📚 Keep Learning!'}
                </div>
                <p className="text-muted-foreground">
                  {percentage >= 90
                    ? "You're a true expert in this field!"
                    : percentage >= 75
                    ? 'You have solid knowledge with room to grow!'
                    : percentage >= 60
                    ? "You're on the right track, keep practicing!"
                    : 'Review the concepts and try again!'}
                </p>
              </div>

              <CardFooter className="flex gap-2 items-center justify-center">
                <Button
                  onClick={retakeQuiz}
                  variant={'primary'}
                  size={'xs'}
                  className=" bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-foreground"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Retake Quiz
                </Button>
                <Button onClick={backToHome} variant="outline" size={'xs'}>
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </CardFooter>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizReport;
