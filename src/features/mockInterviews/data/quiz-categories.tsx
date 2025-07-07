import { BookOpen, Code, Globe, Play } from 'lucide-react';
import { QuizCategory } from '../types/quiz-category';
import { quizzesCards } from './quizzes-cards';

export const categories: QuizCategory[] = [
  {
    name: 'Frontend',
    icon: <Globe className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-blue-500 to-purple-500',
    quizzes: quizzesCards.filter((quiz) => quiz.category === 'Frontend'),
  },
  {
    name: 'Backend',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-green-500 to-teal-500',
    quizzes: quizzesCards.filter((quiz) => quiz.category === 'Backend'),
  },
  {
    name: 'DevOps',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-orange-500 to-red-500',
    quizzes: quizzesCards.filter((quiz) => quiz.category === 'DevOps'),
  },
  {
    name: 'Mobile',
    icon: <Play className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-pink-500 to-purple-500',
    quizzes: quizzesCards.filter((quiz) => quiz.category === 'Mobile'),
  },
];
