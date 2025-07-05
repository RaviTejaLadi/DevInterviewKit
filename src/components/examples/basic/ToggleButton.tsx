import React, { useState } from 'react';

type Theme = {
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
};

type Themes = {
  [key: string]: Theme;
};

const ToggleButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [activeTheme, setActiveTheme] = useState<string>('light');

  const themes: Themes = {
    light: {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      buttonColor: '#f0f0f0',
    },
    dark: {
      backgroundColor: '#333333',
      textColor: '#ffffff',
      buttonColor: '#555555',
    },
    blue: {
      backgroundColor: '#e6f7ff',
      textColor: '#003366',
      buttonColor: '#99ccff',
    },
  };

  const toggleState = (): void => {
    setIsToggled(!isToggled);
  };

  const switchTheme = (): void => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(activeTheme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setActiveTheme(themeKeys[nextIndex]);
  };

  const currentTheme = themes[activeTheme];

  return (
    <div
      className={`p-5 min-h-screen transition-all duration-300`}
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
      }}
    >
      <h1 className="text-2xl font-semibold mb-4">Toggle Button</h1>

      <button
        onClick={toggleState}
        className={`text-white border-none rounded cursor-pointer text-base m-2 transition-all duration-300 px-5 py-2`}
        style={{
          backgroundColor: isToggled ? '#4CAF50' : '#f44336',
        }}
      >
        {isToggled ? 'ON' : 'OFF'}
      </button>

      <p className="mb-4">Current toggle state: {isToggled.toString()}</p>

      <button
        onClick={switchTheme}
        className="border-none rounded cursor-pointer text-base m-2 transition-all duration-300 px-5 py-2"
        style={{
          backgroundColor: currentTheme.buttonColor,
          color: currentTheme.textColor,
        }}
      >
        Switch Theme (Current: {activeTheme})
      </button>
    </div>
  );
};

export default ToggleButton;
