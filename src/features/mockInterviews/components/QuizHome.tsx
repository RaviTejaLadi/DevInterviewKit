import { Button, Card, CardContent, CardTitle } from 'kalki-ui';
import { Play, Search, X } from 'lucide-react';
import { useState, useMemo } from 'react';
import { categories } from '../data/quiz-categories';
import { Quiz } from '../types/quiz';
import { Input } from '@/components/ui/input';

interface QuizHomeProps {
  startQuiz: (quiz: Quiz) => void;
}

const QuizHome = ({ startQuiz }: QuizHomeProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter quizzes based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return categories;
    }

    const query = searchQuery.toLowerCase();
    return categories
      .map((category) => ({
        ...category,
        quizzes: category.quizzes.filter(
          (quiz) =>
            quiz.title.toLowerCase().includes(query) ||
            quiz.description.toLowerCase().includes(query) ||
            category.name.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.quizzes.length > 0);
  }, [searchQuery]);

  // Get total quiz count for search results
  const totalQuizzes = filteredCategories.reduce((sum, category) => sum + category.quizzes.length, 0);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Mock Assessments</h1>
          <p className="text-xl text-muted-foreground">Test your knowledge in web development technologies</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search quizzes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 h-14 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </Button>
            )}
          </div>
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              {totalQuizzes > 0
                ? `Found ${totalQuizzes} quiz${totalQuizzes === 1 ? '' : 's'} matching "${searchQuery}"`
                : `No quizzes found matching "${searchQuery}"`}
            </p>
          </div>
        )}

        {/* Categories and Quizzes */}
        <div className="space-y-12">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No quizzes found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or browse all categories</p>
              <button
                onClick={clearSearch}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Show All Quizzes
              </button>
            </div>
          ) : (
            filteredCategories.map((category) => (
              <div key={category.name} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`${category.color} p-3 rounded-lg text-white shadow-md`}>{category.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{category.name}</h2>
                    <p className="text-muted-foreground">
                      {category.quizzes.length} quiz{category.quizzes.length === 1 ? '' : 's'} available
                    </p>
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizHome;
