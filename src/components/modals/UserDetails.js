import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Calendar, User, Activity, Award } from 'lucide-react';
import Badge from '../ui/Badge';
import StarRating from '../ui/StarRating';

const UserDetails = ({ user, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'projects', label: 'Projects', icon: Activity },
    { id: 'feedback', label: 'Feedback', icon: Award }
  ];

  const TabContent = ({ activeTab, user }) => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="flex items-start space-x-6">
              <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-24 h-24 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {user.firstName} {user.lastName}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Mail className="w-4 h-4 mr-2" />
                    {user.email}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4 mr-2" />
                    {user.phone}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {user.address?.city}, {user.address?.state}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    Age: {user.age}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="primary">{user.department}</Badge>
                <div className="mt-2">
                  <StarRating rating={user.rating} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Bio</h4>
              <p className="text-gray-600 dark:text-gray-400">{user.bio}</p>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 dark:text-white">Current Projects</h4>
            {user.projects?.map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 dark:text-white">{project}</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Active project with ongoing deliverables and milestones.
                </p>
              </div>
            ))}
          </div>
        );

      case 'feedback':
        return (
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900 dark:text-white">Performance History</h4>
            {user.feedback?.map((item) => (
              <div key={item.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <StarRating rating={item.rating} />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{item.comment}</p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {user.firstName} {user.lastName}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex border-b dark:border-gray-700">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${activeTab === tab.id
                    ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="p-6">
          <TabContent activeTab={activeTab} user={user} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails; 