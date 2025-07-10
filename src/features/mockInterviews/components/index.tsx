import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, Award, Clock } from 'lucide-react';
import { Quiz } from '../types/quiz';
import { sampleQuestions } from '../data/quiz-data';
import NoQuestionsFallback from './NoQuestionsFallback';
import { Button } from 'kalki-ui';
import { cn } from '@/lib/utils';
import { useShowAlertHandler } from '@/hooks/useShowAlertHandler';
import QuizHome from './QuizHome';
import { formatTime } from '../utils/formatTime';
import QuizReport from './QuizReport';
import { useQuizDataStore } from '../stores/useQuizDataStore';
import { useResultStore } from '../stores/useResultStore';
import { useRouteStore } from '../stores/useRouteStore';
import { useTimerStore } from '../stores/useTimerStore';
import { useShallow } from 'zustand/react/shallow';
import { SyntaxHighlighter } from '@/components/SyntaxHighLighter';

export default function QuizApp() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(300);

  const questionsPerPage = 5;

  const { currentRoute, setCurrentRoute } = useRouteStore(
    useShallow((state) => ({
      currentRoute: state.currentRoute,
      setCurrentRoute: state.setCurrentRoute,
    }))
  );

  const { isTimerActive, setIsTimerActive } = useTimerStore(
    useShallow((state) => ({
      isTimerActive: state.isTimerActive,
      setIsTimerActive: state.setIsTimerActive,
    }))
  );

  const { selectedQuiz, setSelectedQuiz, answers, setAnswers } = useQuizDataStore(
    useShallow((state) => ({
      selectedQuiz: state.selectedQuiz,
      setSelectedQuiz: state.setSelectedQuiz,
      answers: state.answers,
      setAnswers: state.setAnswers,
    }))
  );

  const { score, setScore, showResult, setShowResult, maxStreak, setMaxStreak } = useResultStore(
    useShallow((state) => ({
      score: state.score,
      setScore: state.setScore,
      showResult: state.showResult,
      setShowResult: state.setShowResult,
      maxStreak: state.maxStreak,
      setMaxStreak: state.setMaxStreak,
    }))
  );

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

  const { showCustomAlertDialog } = useShowAlertHandler();

  const handleFinishQuiz = () => {
    showCustomAlertDialog({
      confirmActionFn: () => {
        setIsTimerActive(false);
        calculateFinalScore();
        setShowResult(true);
      },
      isDestructive: false,
      title: 'Submit Quiz?',
      description:
        'Are you sure you want to submit the quiz? You won’t be able to change your answers after submission.',
      cancelBtnText: 'Cancel',
      confirmBtnText: 'Submit Quiz',
    });
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
    return <QuizHome startQuiz={handleCardClick} />;
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
        <QuizReport
          score={score / questions.length}
          percentage={percentage}
          timeTaken={timeTaken / questions.length}
          maxStreak={maxStreak}
          backToHome={handleBackHome}
          retakeQuiz={handleRetakeQuiz}
        />
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
                <div className="flex items-center bg-red-50 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4 mr-1 text-red-600" />
                  <span className="text-sm font-medium text-red-600">{formatTime(timeLeft)}</span>
                </div>
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
                        <div className="py-2">
                          <SyntaxHighlighter code={question?.code} />
                        </div>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 flex flex-col">
                    {question.options.map((option, optionIndex) => (
                      <Button
                        key={optionIndex}
                        onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                        variant={answers[questionIndex] === optionIndex ? 'success' : 'outline'}
                        className={cn(
                          answers[questionIndex] === optionIndex ? 'bg-primary' : 'hover:bg-muted',
                          'group h-10'
                        )}
                        style={{ display: 'flex', justifyContent: 'start' }}
                      >
                        <span
                          className={cn(
                            answers[questionIndex] === optionIndex ? 'border-none hover:bg-inherit' : 'border-border',
                            'font-semibold border  rounded-full h-6 flex items-center justify-center text-center p-2 w-6 mr-3 group-hover:bg-green-600'
                          )}
                        >
                          {String.fromCharCode(65 + optionIndex)}
                        </span>
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
