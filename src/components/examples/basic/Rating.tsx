import { Star } from 'lucide-react';
import React, { useState } from 'react';

interface RatingProps {
  count?: number;
  value?: number;
  onChange?: (value: number) => void;
  editable?: boolean;
}

const Rating: React.FC<RatingProps> = ({ count = 5, value = 0, onChange, editable = true }) => {
  const [hoverValue, setHoverValue] = useState<number>(0);

  const handleClick = (index: number) => {
    if (editable && onChange) {
      onChange(index + 1);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (editable) {
      setHoverValue(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (editable) {
      setHoverValue(0);
    }
  };

  return (
    <div className="flex space-x-1">
      {[...Array(count)].map((_, index) => (
        <Star
          key={index}
          className={`w-6 h-6 ${(hoverValue || value) > index ? 'text-yellow-400' : 'text-gray-300'}`}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: editable ? 'pointer' : 'default' }}
        />
      ))}
    </div>
  );
};

export default Rating;

export const RatingUsage: React.FC = () => {
  const [rating, setRating] = useState<number>(0);

  return (
    <div className="app">
      <Rating value={rating} onChange={setRating} count={5} editable={true} />
      <p>Current rating: {rating} stars</p>
    </div>
  );
};
