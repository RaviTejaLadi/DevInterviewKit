# Random Quote Generator

Here's a component that displays random quotes from an array, implemented in
both JavaScript and TypeScript.

## JavaScript Version

```jsx
import React, { useState } from 'react';

const QuoteGeneratorJS = () => {
  const quotes = [
    {
      text: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs',
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: 'John Lennon',
    },
    {
      text: 'Strive not to be a success, but rather to be of value.',
      author: 'Albert Einstein',
    },
    {
      text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
      author: 'Nelson Mandela',
    },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: 'Steve Jobs',
    },
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}
    >
      <h1 style={{ color: '#2c3e50' }}>Random Quote Generator (JavaScript)</h1>

      <div
        style={{
          margin: '2rem 0',
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        <p
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            color: '#2c3e50',
            lineHeight: '1.6',
          }}
        >
          "{currentQuote.text}"
        </p>
        <p
          style={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: '#7f8c8d',
            marginTop: '1rem',
          }}
        >
          - {currentQuote.author}
        </p>
      </div>

      <button
        onClick={getRandomQuote}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2980b9')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3498db')}
      >
        Get New Quote
      </button>
    </div>
  );
};

export default QuoteGeneratorJS;
```

## TypeScript Version

```tsx
import React, { useState } from 'react';

interface Quote {
  text: string;
  author: string;
}

const QuoteGeneratorTS: React.FC = () => {
  const quotes: Quote[] = [
    {
      text: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs',
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: 'John Lennon',
    },
    {
      text: 'Strive not to be a success, but rather to be of value.',
      author: 'Albert Einstein',
    },
    {
      text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
      author: 'Nelson Mandela',
    },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: 'Steve Jobs',
    },
  ];

  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);

  const getRandomQuote = (): void => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}
    >
      <h1 style={{ color: '#2c3e50' }}>Random Quote Generator (TypeScript)</h1>

      <div
        style={{
          margin: '2rem 0',
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        <p
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            color: '#2c3e50',
            lineHeight: '1.6',
          }}
        >
          "{currentQuote.text}"
        </p>
        <p
          style={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: '#7f8c8d',
            marginTop: '1rem',
          }}
        >
          - {currentQuote.author}
        </p>
      </div>

      <button
        onClick={getRandomQuote}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2980b9')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3498db')}
      >
        Get New Quote
      </button>
    </div>
  );
};

export default QuoteGeneratorTS;
```

## Key Features:

1. **Quote Management**:

   - Stores an array of quote objects (text and author)
   - Randomly selects a quote when button is clicked

2. **Visual Design**:

   - Clean, card-based layout for the quote display
   - Responsive design that works on different screen sizes
   - Hover effects on the button

3. **Type Safety (TS Version)**:
   - Defines a `Quote` interface for type checking
   - Ensures proper typing for state and functions

## Differences Between JS and TS Versions:

1. **Type Definitions**:

   - TS version defines an `Quote` interface
   - State and props are explicitly typed

2. **Function Return Types**:
   - TS version specifies `void` return type for `getRandomQuote`
