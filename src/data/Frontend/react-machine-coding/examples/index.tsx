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
    content: todoData,
  },
  {
    id: 'login-form',
    title: 'Login Form ',
    content: loginFormData,
  },
  {
    id: 'toggle-button',
    title: 'Toggle Button ',
    content: toggleButtonData,
  },
  {
    id: 'simple-calculator',
    title: ' Simple Calculator ',
    content: simpleCalculatorData,
  },
  {
    id: 'color-picker',
    title: ' Color Picker ',
    content: colorPickerData,
  },
  {
    id: 'show-hide',
    title: 'Show/Hide Component ',
    content: showHideComponentData,
  },
  {
    id: 'timer',
    title: 'Timer ',
    content: timerData,
  },
  {
    id: 'like-button',
    title: 'LiKe Button ',
    content: likeButtonData,
  },
  {
    id: 'random-quote-generator',
    title: 'Random Quote Generator ',
    content: randomQuoteGeneratorData,
  },
];
