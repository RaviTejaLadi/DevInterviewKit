import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-medium ${
              index === activeTab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 hover:text-blue-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;

export const TabsUsage: React.FC = () => {
  const tabs = [
    { label: 'Profile', content: <div>Profile content goes here</div> },
    { label: 'Settings', content: <div>Settings content goes here</div> },
    { label: 'Messages', content: <div>Messages content goes here</div> },
  ];

  return (
    <div className="app">
      <Tabs tabs={tabs} />
    </div>
  );
};
