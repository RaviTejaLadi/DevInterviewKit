import React, { useState } from 'react';

const LikeButton: React.FC = () => {
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
    <div className="flex items-center gap-2 p-5">
      <button
        onClick={handleLike}
        className={`p-2 flex items-center justify-center cursor-pointer bg-none border-none transition-transform duration-300`}
        style={{
          transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
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
        className="text-base transition-all duration-300"
        style={{
          color: isLiked ? '#ff3252' : '#555',
          fontWeight: isLiked ? 'bold' : 'normal',
        }}
      >
        {likeCount}
      </span>
    </div>
  );
};

export default LikeButton;
