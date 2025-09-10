// ThemeContext.tsx
import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

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
  const colorThemes: ColorTheme[] = useMemo(() => ['ocean', 'purple', 'emerald', 'amber', 'rose', 'teal'], []);

  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as ThemeMode) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    const savedColorTheme = localStorage.getItem('colorTheme') as ColorTheme | null;
    const savedDayIndex = localStorage.getItem('colorThemeDayIndex');
    const todayIndex = Math.floor(Date.now() / 86_400_000);

    // If we have a saved theme from today, keep it; else compute new by day index
    if (savedColorTheme && savedDayIndex && Number(savedDayIndex) === todayIndex) {
      return savedColorTheme;
    }
    const autoTheme = colorThemes[todayIndex % colorThemes.length];
    localStorage.setItem('colorTheme', autoTheme);
    localStorage.setItem('colorThemeDayIndex', String(todayIndex));
    return autoTheme;
  });

  // Keep a ref to the midnight timer to clean up
  const midnightTimerRef = useRef<number | null>(null);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('colorTheme', colorTheme);

    // Apply theme classes
    document.documentElement.classList.toggle('dark', theme === 'dark');

    // Remove existing color theme classes
    colorThemes.forEach((t) => {
      document.documentElement.classList.remove(t);
    });

    // Apply current color theme
    document.documentElement.classList.add(colorTheme);
  }, [theme, colorTheme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Auto-rotate color theme daily at local midnight
  useEffect(() => {
    const scheduleNextMidnight = () => {
      const now = new Date();
      const next = new Date(now);
      next.setHours(24, 0, 0, 0); // next local midnight
      const ms = next.getTime() - now.getTime();
      midnightTimerRef.current = window.setTimeout(() => {
        const currentIndex = colorThemes.indexOf(colorTheme);
        const nextIndex = (currentIndex + 1) % colorThemes.length;
        const nextTheme = colorThemes[nextIndex];
        setColorTheme(nextTheme);
        const todayIndex = Math.floor(Date.now() / 86_400_000);
        localStorage.setItem('colorTheme', nextTheme);
        localStorage.setItem('colorThemeDayIndex', String(todayIndex));
        scheduleNextMidnight();
      }, ms);
    };

    scheduleNextMidnight();
    return () => {
      if (midnightTimerRef.current) {
        clearTimeout(midnightTimerRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorThemes, colorTheme]);

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
