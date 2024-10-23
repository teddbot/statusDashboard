import React from 'react';
import { Activity } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-xl font-semibold text-gray-900">Service Status</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              History
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Subscribe to Updates
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;