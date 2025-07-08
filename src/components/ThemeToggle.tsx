import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from './ui/button/button';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="ghost" onClick={toggleTheme} aria-label="Toggle theme" size={'icon'}>
      {theme === 'light' ? (
        <Moon className="size-4 text-gray-800 dark:text-gray-200" />
      ) : (
        <Sun className="size-4 text-gray-800 dark:text-gray-200" />
      )}
    </Button>
  );
};
