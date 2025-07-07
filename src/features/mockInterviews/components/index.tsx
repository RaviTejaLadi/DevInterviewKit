import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, Play, Award, Zap, Clock, Target } from 'lucide-react';
import { Quiz } from '../types/quiz';
import { sampleQuestions } from '../data/quiz-data';
import { categories } from '../data/quiz-categories';
import NoQuestionsFallback from './NoQuestionsFallback';
import { Button } from 'kalki-ui';
import { cn } from '@/lib/utils';

export default function QuizApp() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(300); // 5 minutes
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const questionsPerPage = 5;

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            setIsTimerActive(false);
            handleTimeUp();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timeLeft]);

  const handleTimeUp = () => {
    setShowResult(true);
    calculateFinalScore();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateFinalScore = () => {
    if (!selectedQuiz) return;

    const questions = sampleQuestions[selectedQuiz.id] || [];
    let correctAnswers = 0;
    let currentStreak = 0;
    let maxStreakInQuiz = 0;

    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctAnswers++;
        currentStreak++;
        maxStreakInQuiz = Math.max(maxStreakInQuiz, currentStreak);
      } else {
        currentStreak = 0;
      }
    });

    setScore(correctAnswers);
    setMaxStreak(maxStreakInQuiz);
  };

  const handleCardClick = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setCurrentRoute('quiz');
    setAnswers({});
    setScore(0);
    setShowResult(false);
    setTimeLeft(300);
    setIsTimerActive(true);
    setMaxStreak(0);
    setCurrentPage(0);
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = { ...answers, [questionIndex]: answerIndex };
    setAnswers(newAnswers);
  };

  const handleFinishQuiz = () => {
    setIsTimerActive(false);
    calculateFinalScore();
    setShowResult(true);
  };

  const handleBackHome = () => {
    setCurrentRoute('home');
    setSelectedQuiz(null);
    setAnswers({});
    setScore(0);
    setShowResult(false);
    setTimeLeft(300);
    setIsTimerActive(false);
    setMaxStreak(0);
    setCurrentPage(0);
  };

  const handleRetakeQuiz = () => {
    setAnswers({});
    setScore(0);
    setShowResult(false);
    setTimeLeft(300);
    setIsTimerActive(true);
    setMaxStreak(0);
    setCurrentPage(0);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  if (currentRoute === 'home') {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Mock Assessments</h1>
            <p className="text-xl text-muted-foreground">Test your knowledge in web development technologies</p>
          </div>

          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category.name} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`${category.color} p-3 rounded-lg text-white shadow-md`}>{category.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{category.name}</h2>
                    <p className="text-muted-foreground">{category.quizzes.length} quizzes available</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.quizzes.map((quiz) => (
                    <Card
                      key={quiz.id}
                      className="cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 overflow-hidden"
                      onClick={() => handleCardClick(quiz)}
                    >
                      <div className={`${quiz.color} p-6 text-white`}>
                        <div className="flex items-center justify-between mb-4">
                          {quiz.icon}
                          <div className="text-right">
                            <div className="text-2xl font-bold">{quiz.questions}</div>
                            <div className="text-sm opacity-90">Questions</div>
                          </div>
                        </div>
                        <CardTitle className="text-2xl font-bold text-white mb-2">{quiz.title}</CardTitle>
                      </div>
                      <CardContent className="p-6">
                        <p className="text-muted-foreground mb-4">{quiz.description}</p>
                        <div className="flex items-center text-blue-600 font-semibold">
                          <Play className="w-4 h-4 mr-2" />
                          Start Quiz
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (currentRoute === 'quiz' && selectedQuiz) {
    const questions = sampleQuestions[selectedQuiz.id] || [];
    const totalPages = Math.ceil(questions.length / questionsPerPage);
    const startIndex = currentPage * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const currentQuestions = questions.slice(startIndex, endIndex);

    if (showResult) {
      const percentage = Math.round((score / questions.length) * 100);
      const timeTaken = 300 - timeLeft;

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
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {score}/{questions.length}
                    </div>
                    <div className="text-muted-foreground">Score</div>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                    <Zap className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                    <div className="text-3xl font-bold text-blue-600 mb-1">{percentage}%</div>
                    <div className="text-muted-foreground">Accuracy</div>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                    <Clock className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                    <div className="text-3xl font-bold text-purple-600 mb-1">{formatTime(timeTaken)}</div>
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
                        <div className="text-sm text-muted-foreground">
                          {Math.round(timeTaken / questions.length)}s per question
                        </div>
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

                  <div className="space-y-4">
                    <Button
                      onClick={handleRetakeQuiz}
                      className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Retake Quiz
                    </Button>
                    <Button
                      onClick={handleBackHome}
                      variant="outline"
                      className="w-full md:w-auto ml-0 md:ml-4 px-8 py-3 rounded-lg font-semibold"
                    >
                      <ChevronLeft className="w-5 h-5 mr-2" />
                      Back to Home
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }

    if (questions.length === 0) {
      return <NoQuestionsFallback goToHome={handleBackHome} />;
    }

    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button onClick={handleBackHome} variant="outline" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">{selectedQuiz.title} Quiz</h2>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-muted-foreground">
                  Page {currentPage + 1} of {totalPages} ({questions.length} Total Questions)
                </div>
                <div className="text-sm font-semibold text-foreground">⏱️ {formatTime(timeLeft)}</div>
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mt-4">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-6">
            {currentQuestions.map((question, index) => {
              const questionIndex = startIndex + index;
              return (
                <Card key={questionIndex} className="shadow-lg border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">
                      <span className="font-bold mr-2">Q {questionIndex + 1}.</span>
                      {question.question}
                      {question?.code && (
                        <pre>
                          <code className="mr-2">{question?.code}</code>
                        </pre>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 flex flex-col">
                    {question.options.map((option, optionIndex) => (
                      <Button
                        key={optionIndex}
                        onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                        variant={answers[questionIndex] === optionIndex ? 'success' : 'outline'}
                        className={cn(answers[questionIndex] === optionIndex ? 'bg-primary' : 'hover:bg-muted')}
                        style={{ display: 'flex', justifyContent: 'start' }}
                      >
                        <span className="font-semibold mr-3">{String.fromCharCode(65 + optionIndex)}.</span>
                        <span>{option}</span>
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div className="flex space-x-2">
              <Button onClick={handlePreviousPage} disabled={currentPage === 0} variant="outline" className="px-6 py-2">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                variant="outline"
                className="px-6 py-2"
              >
                Next
                <ChevronLeft className="w-4 h-4 ml-2 rotate-180" />
              </Button>
            </div>

            <div className="text-center">
              <Button
                onClick={handleFinishQuiz}
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Award className="w-5 h-5 mr-2" />
                Submit Quiz ({Object.keys(answers).length}/{questions.length})
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
