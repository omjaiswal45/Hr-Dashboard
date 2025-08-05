import React from 'react';
import { Bookmark, Eye, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import StarRating from '../ui/StarRating';
import useBookmarks from '../../hooks/useBookmarks';
import useAppContext from '../../hooks/useAppContext';

const UserCard = ({ user }) => {
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const { dispatch } = useAppContext();

  const handleViewUser = () => {
    dispatch({ type: 'SET_CURRENT_USER', payload: user });
  };

  const handlePromote = () => {
    alert(`${user.firstName} ${user.lastName} has been promoted!`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={user.image}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-600"
          />
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              {user.firstName} {user.lastName}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
          </div>
        </div>
        <button
          onClick={() => toggleBookmark(user.id)}
          className={`p-1 rounded ${isBookmarked(user.id) ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500 dark:text-gray-500 dark:hover:text-yellow-500'}`}
        >
          <Bookmark className={`w-5 h-5 ${isBookmarked(user.id) ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Age: {user.age}</span>
          <Badge variant="primary">{user.department}</Badge>
        </div>
        <StarRating rating={user.rating} />
      </div>

      <div className="flex space-x-2">
        <Button variant="primary" size="sm" onClick={handleViewUser}>
          <Eye className="w-4 h-4 mr-1" />
          View
        </Button>
        <Button variant="secondary" size="sm" onClick={handlePromote}>
          <TrendingUp className="w-4 h-4 mr-1" />
          Promote
        </Button>
      </div>
    </div>
  );
};

export default UserCard; 