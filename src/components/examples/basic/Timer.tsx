import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString();
  };

  return (
    <div className="p-5 text-center font-sans">
      <h1 className="text-2xl font-semibold mb-4">Current Timer</h1>
      <div className="text-4xl font-bold text-[#2c3e50] my-5 p-5 bg-gray-100 rounded-lg inline-block">
        {formatTime(currentTime)}
      </div>
      <p className="text-gray-500">Updates every second</p>
    </div>
  );
};

export default Timer;
