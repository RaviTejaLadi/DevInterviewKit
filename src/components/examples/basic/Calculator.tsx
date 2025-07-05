import React, { useState } from 'react';

type OperationType = '+' | '-' | '*' | '/' | null;

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number>(0);
  const [operation, setOperation] = useState<OperationType>(null);

  const handleNumberClick = (num: string): void => {
    setInput(input + num);
  };

  const handleOperationClick = (op: OperationType): void => {
    if (input === '' && result === 0) return;

    if (input !== '') {
      calculate();
    }
    setOperation(op);
  };

  const calculate = (): number => {
    const currentValue = parseFloat(input);
    let newResult = result;

    switch (operation) {
      case '+':
        newResult += currentValue;
        break;
      case '-':
        newResult -= currentValue;
        break;
      case '*':
        newResult *= currentValue;
        break;
      case '/':
        newResult /= currentValue;
        break;
      default:
        newResult = currentValue;
    }

    setResult(newResult);
    setInput('');
    return newResult;
  };

  const handleEquals = (): void => {
    if (operation && input !== '') {
      calculate();
      setOperation(null);
    }
  };

  const handleClear = (): void => {
    setInput('');
    setResult(0);
    setOperation(null);
  };

  return (
    <div className="max-w-[300px] mx-auto my-[50px] p-5 border border-gray-300 rounded-xl bg-gray-100">
      <div className="mb-5 p-2.5 bg-white border border-gray-200 rounded min-h-[60px] text-right">
        <div className="text-gray-900 text-sm">
          {operation && `${result} ${operation}`} {input}
        </div>
        <div className="text-2xl font-bold text-gray-900">{input || result}</div>
      </div>

      <div className="grid grid-cols-4 gap-2.5">
        <button onClick={() => handleNumberClick('7')} className="p-2 bg-gray-200 text-gray-900 rounded">
          7
        </button>
        <button onClick={() => handleNumberClick('8')} className="p-2 bg-gray-200 text-gray-900 rounded">
          8
        </button>
        <button onClick={() => handleNumberClick('9')} className="p-2 bg-gray-200  rounded text-gray-900">
          9
        </button>
        <button onClick={() => handleOperationClick('/')} className="p-2 bg-blue-300  rounded text-gray-900">
          /
        </button>

        <button onClick={() => handleNumberClick('4')} className="p-2 bg-gray-200  rounded text-gray-900">
          4
        </button>
        <button onClick={() => handleNumberClick('5')} className="p-2 bg-gray-200  rounded text-gray-900">
          5
        </button>
        <button onClick={() => handleNumberClick('6')} className="p-2 bg-gray-200  rounded text-gray-900">
          6
        </button>
        <button onClick={() => handleOperationClick('*')} className="p-2 bg-blue-300  rounded text-gray-900">
          *
        </button>

        <button onClick={() => handleNumberClick('1')} className="p-2 bg-gray-200  rounded text-gray-900">
          1
        </button>
        <button onClick={() => handleNumberClick('2')} className="p-2 bg-gray-200  rounded text-gray-900">
          2
        </button>
        <button onClick={() => handleNumberClick('3')} className="p-2 bg-gray-200  rounded text-gray-900">
          3
        </button>
        <button onClick={() => handleOperationClick('-')} className="p-2 bg-blue-300  rounded text-gray-900">
          -
        </button>

        <button onClick={() => handleNumberClick('0')} className="p-2 bg-gray-200  rounded text-gray-900">
          0
        </button>
        <button onClick={() => handleNumberClick('.')} className="p-2 bg-gray-200  rounded text-gray-900">
          .
        </button>
        <button onClick={handleEquals} className="p-2 bg-green-300  rounded text-gray-900">
          =
        </button>
        <button onClick={() => handleOperationClick('+')} className="p-2 bg-blue-300  rounded text-gray-900">
          +
        </button>

        <button onClick={handleClear} className="col-span-4 p-2 bg-red-500  rounded text-gray-900">
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Calculator;
