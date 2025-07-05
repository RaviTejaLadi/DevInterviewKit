import React, { useState } from 'react';

const ColorPicker: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');

  const colors: string[] = [
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#ff00ff',
    '#00ffff',
    '#ff9900',
    '#9900ff',
    '#0099ff',
    '#ffffff',
    '#000000',
  ];

  const handleColorChange = (color: string): void => {
    setBackgroundColor(color);
  };

  return (
    <div
      className="min-h-screen p-5 transition-colors duration-300"
      style={{
        backgroundColor,
      }}
    >
      <h1 className="text-2xl font-semibold mb-4">Color Picker</h1>

      <div className="flex flex-wrap gap-2.5">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => handleColorChange(color)}
            className="rounded-full cursor-pointer shadow"
            style={{
              backgroundColor: color,
              width: '50px',
              height: '50px',
              border: color === '#ffffff' ? '1px solid #ccc' : 'none',
            }}
            aria-label={`Change color to ${color}`}
          />
        ))}
      </div>

      <p className="mt-5 text-lg">
        Current color: <span className="font-bold">{backgroundColor}</span>
      </p>
    </div>
  );
};

export default ColorPicker;
