import React from 'react';
import { Users } from 'lucide-react';
import UserCard from '../components/cards/UserCard';
import SearchAndFilter from '../components/filters/SearchAndFilter';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import EmptyState from '../components/ui/EmptyState';
import ErrorAlert from '../components/ui/ErrorAlert';
import Badge from '../components/ui/Badge';
import useSearch from '../hooks/useSearch';
import useAppContext from '../hooks/useAppContext';

const Dashboard = () => {
  const { state } = useAppContext();
  const { filteredUsers } = useSearch();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">HR Dashboard</h1>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Badge variant="success">{state.users.length} Total Employees</Badge>
          <Badge variant="primary">{state.bookmarks.length} Bookmarked</Badge>
        </div>
      </div>

      {state.error && <ErrorAlert message={state.error} />}

      <SearchAndFilter />

      {state.loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}

      {filteredUsers.length === 0 && !state.loading && state.users.length === 0 && (
        <EmptyState
          icon={Users}
          title="No employees loaded"
          description="There was an issue loading employee data. Please refresh the page."
        />
      )}

      {filteredUsers.length === 0 && !state.loading && state.users.length > 0 && (
        <EmptyState
          icon={Users}
          title="No employees found"
          description="Try adjusting your search or filters."
        />
      )}
    </div>
  );
};

export default Dashboard; 