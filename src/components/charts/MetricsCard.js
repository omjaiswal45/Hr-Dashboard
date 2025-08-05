import React from 'react';

const MetricsCard = ({ icon: Icon, title, value, color }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
    <div className="flex items-center">
      <Icon className={`w-8 h-8 ${color}`} />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  </div>
);

export default MetricsCard; 