# Show/Hide Component

Here's a component that toggles the visibility of content, implemented in both
JavaScript and TypeScript.

## JavaScript Version

```jsx
import React, { useState } from 'react';

const ToggleVisibilityJS = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Toggle Visibility (JavaScript)</h1>

      <button
        onClick={toggleVisibility}
        style={{
          padding: '10px 15px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          marginBottom: '20px',
        }}
      >
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>

      {isVisible && (
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #ddd',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
          }}
        >
          <h2>Hidden Content</h2>
          <p>This content is now visible because you clicked the button!</p>
          <p>You can toggle me anytime using the button above.</p>
        </div>
      )}
    </div>
  );
};

export default ToggleVisibilityJS;
```

## TypeScript Version

```tsx
import React, { useState } from 'react';

const ToggleVisibilityTS: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Toggle Visibility (TypeScript)</h1>

      <button
        onClick={toggleVisibility}
        style={{
          padding: '10px 15px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          marginBottom: '20px',
        }}
      >
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>

      {isVisible && (
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #ddd',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
          }}
        >
          <h2>Hidden Content</h2>
          <p>This content is now visible because you clicked the button!</p>
          <p>You can toggle me anytime using the button above.</p>
        </div>
      )}
    </div>
  );
};

export default ToggleVisibilityTS;
```

## Key Features:

1. **Toggle Button**:

   - Button text changes between "Show Content" and "Hide Content" based on
     state
   - Clicking the button toggles the visibility state

2. **Conditional Rendering**:

   - Content is only rendered when `isVisible` is true (using `&&` operator)
   - Smooth appearance/disappearance with CSS transition

3. **Styling**:
   - Clean, responsive layout
   - Visual feedback for the hidden content area

## Differences Between JS and TS Versions:

1. **Type Annotations**:

   - In TS, we specify `React.FC` for the component type
   - The state is typed as `boolean` with `useState<boolean>(false)`
   - The toggle function has a `: void` return type annotation

2. **Props Typing** (if the component accepted props):
   - In TS, we would define an interface for props
   - In JS, props would be used without type checking
