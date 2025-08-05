import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

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

const RatingDistributionChart = ({ data }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Performance Rating Distribution</h3>
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="opacity-30" />
          <XAxis 
            dataKey="rating" 
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
          <Bar 
            dataKey="count" 
            fill="#8B5CF6" 
            name="Employee Count"
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="percentage" 
            fill="#06B6D4" 
            name="Percentage"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default RatingDistributionChart; 