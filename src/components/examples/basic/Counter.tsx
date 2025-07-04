import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ margin: '5px', padding: '5px 10px' }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: '5px', padding: '5px 10px' }}>
        Decrement
      </button>
      <button onClick={reset} style={{ margin: '5px', padding: '5px 10px' }}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
