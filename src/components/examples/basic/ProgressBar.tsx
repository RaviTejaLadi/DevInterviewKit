import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  progress: number;
  color?: string;
  height?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color = '#4CAF50', height = 20 }) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="w-full bg-gray-200 rounded overflow-hidden" style={{ height }}>
      <div
        className="flex items-center justify-center text-white text-xs font-medium transition-all duration-300 ease-in-out"
        style={{
          width: `${clampedProgress}%`,
          backgroundColor: color,
          height: '100%',
        }}
      >
        <span>{clampedProgress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;

export const ProgressBarUsage: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <ProgressBar progress={progress} color="#3f51b5" height={30} />
      <p>Current progress: {progress}%</p>
    </div>
  );
};
