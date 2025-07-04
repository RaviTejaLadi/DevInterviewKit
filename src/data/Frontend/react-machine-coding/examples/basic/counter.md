# Simple Counter Component

## JavaScript Version

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Counter: {count}</h1>
      <button
        onClick={increment}
        style={{ margin: '5px', padding: '5px 10px' }}
      >
        Increment
      </button>
      <button
        onClick={decrement}
        style={{ margin: '5px', padding: '5px 10px' }}
      >
        Decrement
      </button>
      <button onClick={reset} style={{ margin: '5px', padding: '5px 10px' }}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
```

## TypeScript Version

```tsx
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count - 1);
  const reset = (): void => setCount(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Counter: {count}</h1>
      <button
        onClick={increment}
        style={{ margin: '5px', padding: '5px 10px' }}
      >
        Increment
      </button>
      <button
        onClick={decrement}
        style={{ margin: '5px', padding: '5px 10px' }}
      >
        Decrement
      </button>
      <button onClick={reset} style={{ margin: '5px', padding: '5px 10px' }}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
```

### Key Differences in TypeScript Version:

1. Added `React.FC` type to the component
2. Explicitly typed the state as `number` with `useState<number>(0)`
3. Added return type `void` to the handler functions
4. Better type checking for all props and state
