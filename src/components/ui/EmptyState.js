import React from 'react';

const EmptyState = ({ icon: Icon, title, description }) => (
  <div className="text-center py-12">
    <Icon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400">{description}</p>
  </div>
);

export default EmptyState; 