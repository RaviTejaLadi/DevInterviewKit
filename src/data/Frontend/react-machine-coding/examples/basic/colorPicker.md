# Color Picker

Here's a color picker component that changes the background color using buttons,
implemented in both JavaScript and TypeScript.

## JavaScript Version

```jsx
import React, { useState } from 'react';

const ColorPickerJS = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const colors = [
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

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div
      className="color-picker-container"
      style={{
        backgroundColor,
        minHeight: '100vh',
        padding: '20px',
        transition: 'background-color 0.3s ease',
      }}
    >
      <h1>Color Picker (JavaScript)</h1>
      <div
        className="color-buttons"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
      >
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => handleColorChange(color)}
            style={{
              backgroundColor: color,
              width: '50px',
              height: '50px',
              border: color === '#ffffff' ? '1px solid #ccc' : 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            }}
            aria-label={`Change color to ${color}`}
          />
        ))}
      </div>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        Current color:{' '}
        <span style={{ fontWeight: 'bold' }}>{backgroundColor}</span>
      </p>
    </div>
  );
};

export default ColorPickerJS;
```

## TypeScript Version

```tsx
import React, { useState } from 'react';

const ColorPickerTS: React.FC = () => {
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
      className="color-picker-container"
      style={{
        backgroundColor,
        minHeight: '100vh',
        padding: '20px',
        transition: 'background-color 0.3s ease',
      }}
    >
      <h1>Color Picker (TypeScript)</h1>
      <div
        className="color-buttons"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
      >
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => handleColorChange(color)}
            style={{
              backgroundColor: color,
              width: '50px',
              height: '50px',
              border: color === '#ffffff' ? '1px solid #ccc' : 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            }}
            aria-label={`Change color to ${color}`}
          />
        ))}
      </div>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        Current color:{' '}
        <span style={{ fontWeight: 'bold' }}>{backgroundColor}</span>
      </p>
    </div>
  );
};

export default ColorPickerTS;
```

## Key Differences Between JS and TS Versions:

1. **Type Annotations**:

   - In TS, we specify types for props, state, and function parameters
     (`: string`, `: void`, etc.)
   - The component is typed as `React.FC` (Function Component)

2. **Array Type**:

   - In TS, we explicitly declare `colors` as a string array with `: string[]`

3. **Function Parameters**:
   - The `handleColorChange` function in TS has a typed parameter
     `(color: string)`

Both versions provide the same functionality:

- A set of color buttons that change the background when clicked
- Smooth color transition effect
- Display of the current color value
- Responsive design that works on different screen sizes
