import React from 'react';
import { Bookmark, UserPlus, TrendingUp } from 'lucide-react';
import Badge from '../components/ui/Badge';
import StarRating from '../components/ui/StarRating';
import Button from '../components/ui/Button';
import EmptyState from '../components/ui/EmptyState';
import useBookmarks from '../hooks/useBookmarks';
import useAppContext from '../hooks/useAppContext';

const BookmarksPage = () => {
  const { state } = useAppContext();
  const { bookmarks, toggleBookmark } = useBookmarks();

  const bookmarkedUsers = state.users.filter(user => bookmarks.includes(user.id));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Bookmarked Employees</h1>
        <Badge variant="primary">{bookmarkedUsers.length} Bookmarked</Badge>
      </div>

      {bookmarkedUsers.length === 0 ? (
        <EmptyState
          icon={Bookmark}
          title="No bookmarked employees"
          description="Start bookmarking employees to see them here."
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedUsers.map(user => (
            <div key={user.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
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
                  className="text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400"
                >
                  <Bookmark className="w-5 h-5 fill-current" />
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
                <Button variant="primary" size="sm" onClick={() => alert('Assigned to new project!')}>
                  <UserPlus className="w-4 h-4 mr-1" />
                  Assign Project
                </Button>
                <Button variant="secondary" size="sm" onClick={() => alert(`${user.firstName} promoted!`)}>
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Promote
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookmarksPage; 