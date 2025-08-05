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

const DepartmentChart = ({ data }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Department Performance</h3>
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="opacity-30" />
          <XAxis
            dataKey="department"
            className="text-xs"
            tick={{ fill: 'currentColor' }}
            stroke="currentColor"
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis
            domain={[0, 5]}
            className="text-xs"
            tick={{ fill: 'currentColor' }}
            stroke="currentColor"
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="avgRating"
            fill="#3B82F6"
            name="Average Rating"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="employees"
            fill="#10B981"
            name="Employee Count"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default DepartmentChart; 