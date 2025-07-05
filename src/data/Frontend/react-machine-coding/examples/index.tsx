import CounterData from './basic/counter.md?raw';
import todoData from './basic/todo.md?raw';
import loginFormData from './basic/loginForm.md?raw';
import toggleButtonData from './basic/toggleButton.md?raw';
import simpleCalculatorData from './basic/simpleCalculator.md?raw';
import colorPickerData from './basic/colorPicker.md?raw';
import showHideComponentData from './basic/showHideComponent.md?raw';
import timerData from './basic/timer.md?raw';
import likeButtonData from './basic/likeButton.md?raw';
import randomQuoteGeneratorData from './basic/randomQuoteGenerator.md?raw';
import { ReactNode } from 'react';
import Counter from '@/components/examples/basic/Counter';
import Todo from '@/components/examples/basic/Todo';
import LoginForm from '@/components/examples/basic/LoginForm';
import ToggleButton from '@/components/examples/basic/ToggleButton';
import Calculator from '@/components/examples/basic/Calculator';
import ColorPicker from '@/components/examples/basic/ColorPicker';
import ToggleVisibility from '@/components/examples/basic/ToggleVisibility';
import Timer from '@/components/examples/basic/Timer';
import LikeButton from '@/components/examples/basic/LikeButton';
import QuoteGenerator from '@/components/examples/basic/QuoteGenerator';

interface machineCodingExamplesDataSchema {
  id: string;
  title: string;
  content: string;
  component?: ReactNode;
}
export const machineCodingExamplesData: machineCodingExamplesDataSchema[] = [
  {
    id: 'counter',
    title: 'Counter ',
    component: <Counter />,
    content: CounterData,
  },
  {
    id: 'todo',
    title: 'Todo ',
    component: <Todo />,
    content: todoData,
  },
  {
    id: 'login-form',
    title: 'Login Form ',
    component: <LoginForm />,
    content: loginFormData,
  },
  {
    id: 'toggle-button',
    title: 'Toggle Button ',
    component: <ToggleButton />,
    content: toggleButtonData,
  },
  {
    id: 'simple-calculator',
    title: ' Simple Calculator ',
    component: <Calculator />,
    content: simpleCalculatorData,
  },
  {
    id: 'color-picker',
    title: ' Color Picker ',
    component: <ColorPicker />,
    content: colorPickerData,
  },
  {
    id: 'show-hide',
    title: 'Show/Hide Component ',
    component: <ToggleVisibility />,
    content: showHideComponentData,
  },
  {
    id: 'timer',
    title: 'Timer ',
    component: <Timer />,
    content: timerData,
  },
  {
    id: 'like-button',
    title: 'LiKe Button ',
    component: <LikeButton />,
    content: likeButtonData,
  },
  {
    id: 'random-quote-generator',
    title: 'Random Quote Generator ',
    component: <QuoteGenerator />,
    content: randomQuoteGeneratorData,
  },
];
