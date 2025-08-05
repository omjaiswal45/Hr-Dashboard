import React from 'react';
import { Users, Bookmark, Star, BarChart3 } from 'lucide-react';
import DepartmentChart from '../components/charts/DepartmentChart';
import BookmarkTrendsChart from '../components/charts/BookmarkTrendsChart';
import RatingDistributionChart from '../components/charts/RatingDistributionChart';
import MetricsCard from '../components/charts/MetricsCard';
import DepartmentTable from '../components/tables/DepartmentTable';
import useAppContext from '../hooks/useAppContext';

const AnalyticsPage = () => {
  const { state } = useAppContext();
  
  // Calculate analytics data
  const departmentStats = state.users.reduce((acc, user) => {
    if (!acc[user.department]) {
      acc[user.department] = { total: 0, ratingSum: 0 };
    }
    acc[user.department].total += 1;
    acc[user.department].ratingSum += user.rating;
    return acc;
  }, {});
  
  const departmentData = Object.entries(departmentStats).map(([dept, stats]) => ({
    department: dept,
    avgRating: parseFloat((stats.ratingSum / stats.total).toFixed(1)),
    employees: stats.total,
    totalRating: stats.ratingSum
  }));
  
  // Generate bookmark trends data (mocked monthly data)
  const bookmarkTrends = [
    { month: 'Jan', bookmarks: 12, newBookmarks: 5 },
    { month: 'Feb', bookmarks: 18, newBookmarks: 8 },
    { month: 'Mar', bookmarks: 25, newBookmarks: 12 },
    { month: 'Apr', bookmarks: 32, newBookmarks: 15 },
    { month: 'May', bookmarks: 28, newBookmarks: 9 },
    { month: 'Jun', bookmarks: 35, newBookmarks: 18 },
    { month: 'Jul', bookmarks: 42, newBookmarks: 22 },
    { month: 'Aug', bookmarks: state.bookmarks.length, newBookmarks: 8 }
  ];
  
  const ratingDistribution = [1, 2, 3, 4, 5].map(rating => ({
    rating: `${rating} Star${rating > 1 ? 's' : ''}`,
    count: state.users.filter(user => user.rating === rating).length,
    percentage: state.users.length > 0 ? Math.round((state.users.filter(user => user.rating === rating).length / state.users.length) * 100) : 0
  }));
  
  const avgRating = state.users.length > 0 ? (state.users.reduce((sum, user) => sum + user.rating, 0) / state.users.length).toFixed(1) : '0';
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
      
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard 
          icon={Users}
          title="Total Employees"
          value={state.users.length}
          color="text-blue-600"
        />
        <MetricsCard 
          icon={Bookmark}
          title="Bookmarked"
          value={state.bookmarks.length}
          color="text-yellow-600"
        />
        <MetricsCard 
          icon={Star}
          title="Avg Rating"
          value={avgRating}
          color="text-green-600"
        />
        <MetricsCard 
          icon={BarChart3}
          title="Departments"
          value={departmentData.length}
          color="text-purple-600"
        />
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DepartmentChart data={departmentData} />
        <BookmarkTrendsChart data={bookmarkTrends} />
      </div>
      
      {/* Rating Distribution Chart */}
      <RatingDistributionChart data={ratingDistribution} />
      
      {/* Department Details Table */}
      <DepartmentTable data={departmentData} />
    </div>
  );
};

export default AnalyticsPage; 