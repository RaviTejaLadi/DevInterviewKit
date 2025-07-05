import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count - 1);
  const reset = (): void => setCount(0);

  return (
    <div className="text-center my-5">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <button onClick={increment} className="m-1 px-3 py-1 border rounded bg-blue-500 text-white hover:bg-blue-600">
        Increment
      </button>
      <button onClick={decrement} className="m-1 px-3 py-1 border rounded bg-red-500 text-white hover:bg-red-600">
        Decrement
      </button>
      <button onClick={reset} className="m-1 px-3 py-1 border rounded bg-gray-500 text-white hover:bg-gray-600">
        Reset
      </button>
    </div>
  );
};

export default Counter;
