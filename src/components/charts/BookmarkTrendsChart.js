import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
        <p className="text-gray-900 dark:text-white font-medium">{`${label}`}</p>
        {payload.map((pld, index) => (
          <p key={index} className="text-sm dark:text-gray-300" style={{ color: pld.color }}>
            {`${pld.dataKey}: ${pld.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const BookmarkTrendsChart = ({ data }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Bookmark Trends</h3>
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="opacity-30" />
          <XAxis 
            dataKey="month" 
            className="text-xs"
            tick={{ fill: 'currentColor' }}
            stroke="currentColor"
          />
          <YAxis 
            className="text-xs"
            tick={{ fill: 'currentColor' }}
            stroke="currentColor"
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="bookmarks" 
            stroke="#F59E0B" 
            strokeWidth={3}
            name="Total Bookmarks"
            dot={{ fill: '#F59E0B', strokeWidth: 2, r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="newBookmarks" 
            stroke="#EF4444" 
            strokeWidth={3}
            name="New Bookmarks"
            dot={{ fill: '#EF4444', strokeWidth: 2, r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default BookmarkTrendsChart; 