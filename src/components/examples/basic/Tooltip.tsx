import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        {children}
      </div>
      {isVisible && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap shadow-lg z-10">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

export const TooltipUsage = () => {
  return (
    <div className="app">
      <Tooltip text="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>
      <Tooltip text="More information here">
        <span style={{ marginLeft: 20 }}>ℹ️</span>
      </Tooltip>
    </div>
  );
};
