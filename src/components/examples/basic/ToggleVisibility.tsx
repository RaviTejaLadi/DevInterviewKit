import React, { useState } from 'react';

const ToggleVisibility: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Toggle Visibility</h1>

      <button
        onClick={toggleVisibility}
        className="mb-5 px-4 py-2 bg-green-600 text-white rounded cursor-pointer text-base"
      >
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>

      {isVisible && (
        <div className="p-5  border border-gray-300 text-foreground rounded transition-all duration-300">
          <h2 className="text-xl font-semibold mb-2">Hidden Content</h2>
          <p className="mb-1">This content is now visible because you clicked the button!</p>
          <p>You can toggle me anytime using the button above.</p>
        </div>
      )}
    </div>
  );
};

export default ToggleVisibility;
