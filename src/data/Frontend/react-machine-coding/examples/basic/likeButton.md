# Like Button

Here's a like button component that toggles state with visual feedback,
implemented in both JavaScript and TypeScript.

## JavaScript Version

```jsx
import React, { useState } from 'react';

const LikeButtonJS = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLike = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newLikeState = !isLiked;
    setIsLiked(newLikeState);
    setLikeCount((prev) => (newLikeState ? prev + 1 : prev - 1));

    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '20px',
      }}
    >
      <button
        onClick={handleLike}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
          transition: 'transform 0.3s ease, color 0.3s ease',
        }}
        aria-label={isLiked ? 'Unlike' : 'Like'}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isLiked ? '#ff3252' : 'none'}
          stroke={isLiked ? '#ff3252' : '#555'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
      <span
        style={{
          fontSize: '16px',
          color: isLiked ? '#ff3252' : '#555',
          fontWeight: isLiked ? 'bold' : 'normal',
          transition: 'color 0.3s ease, font-weight 0.3s ease',
        }}
      >
        {likeCount}
      </span>
    </div>
  );
};

export default LikeButtonJS;
```

## TypeScript Version

```tsx
import React, { useState } from 'react';

const LikeButtonTS: React.FC = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(42);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleLike = (): void => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newLikeState = !isLiked;
    setIsLiked(newLikeState);
    setLikeCount((prev) => (newLikeState ? prev + 1 : prev - 1));

    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '20px',
      }}
    >
      <button
        onClick={handleLike}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
          transition: 'transform 0.3s ease, color 0.3s ease',
        }}
        aria-label={isLiked ? 'Unlike' : 'Like'}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isLiked ? '#ff3252' : 'none'}
          stroke={isLiked ? '#ff3252' : '#555'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
      <span
        style={{
          fontSize: '16px',
          color: isLiked ? '#ff3252' : '#555',
          fontWeight: isLiked ? 'bold' : 'normal',
          transition: 'color 0.3s ease, font-weight 0.3s ease',
        }}
      >
        {likeCount}
      </span>
    </div>
  );
};

export default LikeButtonTS;
```

## Key Features:

1. **Visual Feedback**:

   - Heart icon changes color (red when liked, gray when not)
   - Subtle scale animation when clicked
   - Like count changes color and weight when liked

2. **State Management**:

   - Tracks like state (isLiked)
   - Maintains like count
   - Handles animation state to prevent rapid clicks

3. **Accessibility**:

   - Uses aria-label for screen readers
   - Button is keyboard-navigable

4. **Prevention of Rapid Clicks**:
   - Animation state prevents multiple rapid clicks during animation

## Differences Between JS and TS Versions:

1. **Type Annotations**:

   - In TS, all state variables have explicit types (`boolean`, `number`)
   - The handler function has a `void` return type annotation
   - Component is typed as `React.FC`

2. **Type Safety**:
   - TS ensures we only pass proper types to state setters
   - Prevents accidental misuse of the component
