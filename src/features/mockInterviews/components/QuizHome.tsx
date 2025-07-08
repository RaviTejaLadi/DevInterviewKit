import { Card, CardContent, CardTitle } from 'kalki-ui';
import { Play } from 'lucide-react';
import { categories } from '../data/quiz-categories';
import { Quiz } from '../types/quiz';

interface QuizHomeProps {
  startQuiz: (quiz: Quiz) => void;
}
const QuizHome = ({ startQuiz }: QuizHomeProps) => {
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
                    onClick={() => startQuiz(quiz)}
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
};

export default QuizHome;
