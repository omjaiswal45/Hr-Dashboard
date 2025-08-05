import React, { useState } from 'react';
import { Search, Filter, Star, ChevronDown, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import useSearch from '../../hooks/useSearch';
import useAppContext from '../../hooks/useAppContext';

const SearchAndFilter = () => {
  const { searchTerm, filters, setSearchTerm, setFilters } = useSearch();
  const { state } = useAppContext();
  const [showFilters, setShowFilters] = useState(false);

  const departments = [...new Set(state.users.map(user => user.department))];
  const ratings = [1, 2, 3, 4, 5];

  const handleDepartmentFilter = (dept) => {
    const newDepartments = filters.department.includes(dept)
      ? filters.department.filter(d => d !== dept)
      : [...filters.department, dept];
    setFilters({ ...filters, department: newDepartments });
  };

  const handleRatingFilter = (rating) => {
    const newRatings = filters.rating.includes(rating)
      ? filters.rating.filter(r => r !== rating)
      : [...filters.rating, rating];
    setFilters({ ...filters, rating: newRatings });
  };

  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name, email, or department..."
            value={searchTerm}
            onChange={(e) => {
              console.log('Search input changed:', e.target.value);
              setSearchTerm(e.target.value);
            }}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
        <Button
          variant="secondary"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
          {showFilters ? <ChevronDown className="w-4 h-4 ml-2" /> : <ChevronRight className="w-4 h-4 ml-2" />}
        </Button>
      </div>

      {showFilters && (
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-4 border border-gray-200 dark:border-gray-700">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Department</h4>
            <div className="flex flex-wrap gap-2">
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => handleDepartmentFilter(dept)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${filters.department.includes(dept)
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Rating</h4>
            <div className="flex gap-2">
              {ratings.map(rating => (
                <button
                  key={rating}
                  onClick={() => handleRatingFilter(rating)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors flex items-center ${filters.rating.includes(rating)
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                >
                  {rating} <Star className="w-3 h-3 ml-1" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter; 