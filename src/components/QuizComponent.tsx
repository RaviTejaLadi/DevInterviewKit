/* eslint-disable no-case-declarations */
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  questionType: 'text' | 'code' | 'ordered-list' | 'unordered-list';
  options: string[];
  correctAnswer: number;
}

interface QuizComponentProps {
  questions: Question[];
  questionsPerPage?: number;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ questions, questionsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState<{ [key: number]: boolean }>({});

  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const startIndex = currentPage * questionsPerPage;
  const endIndex = Math.min(startIndex + questionsPerPage, questions.length);
  const currentQuestions = questions.slice(startIndex, endIndex);

  const handleAnswerSelect = (questionId: number, selectedOption: number) => {
    if (showResults[questionId]) return;

    const newAnswers = { ...answers, [questionId]: selectedOption };
    const newShowResults = { ...showResults, [questionId]: true };

    setAnswers(newAnswers);
    setShowResults(newShowResults);
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowResults({});
    setCurrentPage(0);
  };

  const renderQuestion = (question: Question) => {
    switch (question.questionType) {
      case 'code':
        return (
          <pre className="bg-gray-100 p-4 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">
            <code>{question.question}</code>
          </pre>
        );

      case 'ordered-list':
        const orderedItems = question.question.split('\n');
        return (
          <ol className="list-decimal list-inside space-y-1">
            {orderedItems.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ol>
        );

      case 'unordered-list':
        const unorderedItems = question.question.split('\n');
        return (
          <ul className="list-disc list-inside space-y-1">
            {unorderedItems.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        );

      default:
        return <p className="text-gray-700 leading-relaxed">{question.question}</p>;
    }
  };

  const getOptionStyle = (questionId: number, optionIndex: number) => {
    const isSelected = answers[questionId] === optionIndex;
    const isCorrect = optionIndex === questions.find((q) => q.id === questionId)?.correctAnswer;
    const hasAnswered = showResults[questionId];

    if (!hasAnswered) {
      return 'border-gray-300 hover:border-blue-400 hover:bg-blue-50';
    }

    if (isSelected && isCorrect) {
      return 'border-green-500 bg-green-100 text-green-800';
    }

    if (isSelected && !isCorrect) {
      return 'border-red-500 bg-red-100 text-red-800';
    }

    if (isCorrect) {
      return 'border-green-500 bg-green-50 text-green-700';
    }

    return 'border-gray-300 bg-gray-50 text-gray-500';
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Quiz App</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={resetQuiz}
            className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <RotateCcw size={16} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {currentQuestions.map((question, index) => (
          <div key={question.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                  Question {startIndex + index + 1}
                </span>
                <span className="text-xs text-gray-500 capitalize">{question.questionType.replace('-', ' ')}</span>
              </div>
              {renderQuestion(question)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleAnswerSelect(question.id, optionIndex)}
                  disabled={showResults[question.id]}
                  className={`p-3 text-left border-2 rounded-lg transition-all duration-200 ${getOptionStyle(
                    question.id,
                    optionIndex
                  )} ${showResults[question.id] ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <span className="font-medium text-sm text-gray-600 mr-2">
                    {String.fromCharCode(65 + optionIndex)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>

            {showResults[question.id] && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  {answers[question.id] === question.correctAnswer
                    ? '✓ Correct!'
                    : `✗ Incorrect. The correct answer is ${String.fromCharCode(65 + question.correctAnswer)}.`}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 rounded-lg transition-colors"
        >
          <ChevronLeft size={20} />
          <span>Previous</span>
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
          disabled={currentPage === totalPages - 1}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 rounded-lg transition-colors"
        >
          <span>Next</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

// Sample questions data
const sampleQuestions: Question[] = [
  {
    id: 1,
    question: 'What is the capital of France?',
    questionType: 'text',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: `function add(a, b) {
  return a + b;
}
console.log(add(2, 3));`,
    questionType: 'code',
    options: ['4', '5', '6', 'Error'],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: 'Steps to make tea:\nBoil water\nAdd tea leaves\nSteep for 3-5 minutes\nStrain and serve',
    questionType: 'ordered-list',
    options: ['4 steps', '5 steps', '3 steps', '6 steps'],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: 'Programming languages:\nJavaScript\nPython\nJava\nC++',
    questionType: 'unordered-list',
    options: ['3 languages', '4 languages', '5 languages', '2 languages'],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: 'Which planet is known as the Red Planet?',
    questionType: 'text',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: 'What is 2 + 2?',
    questionType: 'text',
    options: ['3', '4', '5', '6'],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: `const arr = [1, 2, 3];
arr.push(4);
console.log(arr.length);`,
    questionType: 'code',
    options: ['3', '4', '5', 'undefined'],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: 'React concepts:\nComponents\nProps\nState\nHooks',
    questionType: 'unordered-list',
    options: ['3 concepts', '4 concepts', '5 concepts', '2 concepts'],
    correctAnswer: 1,
  },
];

// Main App component
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <QuizComponent questions={sampleQuestions} questionsPerPage={5} />
    </div>
  );
};

export default App;
