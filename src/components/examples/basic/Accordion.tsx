import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion space-y-2">
      {items.map((item, index) => (
        <div key={item.title} className="accordion-item border border-gray-300 rounded-md overflow-hidden">
          <button
            className="accordion-header w-full flex justify-between items-center p-4 focus:outline-none"
            onClick={() => handleClick(index)}
          >
            <span className="font-medium text-left">{item.title}</span>
            <span className="accordion-icon text-xl">{activeIndex === index ? '−' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className="accordion-content p-4  border-t border-gray-200">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
