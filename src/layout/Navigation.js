import React from 'react';
import { Home, Bookmark, BarChart3 } from 'lucide-react';

const Navigation = ({ currentPage, onPageChange }) => {
  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          {navigation.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex items-center px-3 py-4 text-sm font-medium transition-colors ${currentPage === item.id
                    ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 