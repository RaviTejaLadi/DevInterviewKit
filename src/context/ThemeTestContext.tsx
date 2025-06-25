// ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';
type ColorTheme = 'ocean' | 'purple' | 'emerald' | 'amber' | 'rose' | 'teal';

interface ThemeContextType {
  theme: ThemeMode;
  colorTheme: ColorTheme;
  toggleTheme: () => void;
  setColorTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as ThemeMode) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    const savedColorTheme = localStorage.getItem('colorTheme');
    return (savedColorTheme as ColorTheme) || 'ocean';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('colorTheme', colorTheme);

    // Apply theme classes
    document.documentElement.classList.toggle('dark', theme === 'dark');

    // Remove existing color theme classes
    const colorThemes = ['ocean', 'purple', 'emerald', 'amber', 'rose', 'teal'];
    colorThemes.forEach((t) => {
      document.documentElement.classList.remove(t, `${t}-dark`);
    });

    // Apply current color theme
    const themeClass = theme === 'dark' ? `${colorTheme}-dark` : colorTheme;
    document.documentElement.classList.add(themeClass);
  }, [theme, colorTheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, colorTheme, toggleTheme, setColorTheme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
