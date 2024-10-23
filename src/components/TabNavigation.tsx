import React from 'react';
import type { TabItem, TelcoProvider } from '../types';

interface TabNavigationProps {
  tabs: TabItem[];
  activeTab: TelcoProvider;
  onTabChange: (tab: TelcoProvider) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              ${activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
              group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm
            `}
          >
            <img
              src={tab.logo}
              alt={`${tab.name} logo`}
              className="h-5 w-5 mr-2"
            />
            {tab.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;