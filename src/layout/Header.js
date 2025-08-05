import React from 'react';
import { Users, Plus, Moon, Sun } from 'lucide-react';
import Button from '../components/ui/Button';

const Header = ({ onToggleDarkMode, darkMode, onShowCreateModal }) => (
  <header className="bg-white dark:bg-gray-800 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Users className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">HR Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="primary"
            size="sm"
            onClick={onShowCreateModal}
            className="hidden sm:flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Employee
          </Button>

          <button
            onClick={onToggleDarkMode}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header; 