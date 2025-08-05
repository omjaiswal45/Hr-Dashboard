import React, { useState, useEffect } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Dashboard from '../pages/Dashboard';
import BookmarksPage from '../pages/BookmarksPage';
import AnalyticsPage from '../pages/AnalyticsPage';
import UserDetails from '../components/modals/UserDetails';
import CreateUserModal from '../components/modals/CreateUserModal';
import useAppContext from '../hooks/useAppContext';

const Layout = () => {
  const { state, dispatch } = useAppContext();
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Initialize dark mode from system preference
  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode && !state.darkMode) {
      dispatch({ type: 'TOGGLE_DARK_MODE' });
    }
  }, []);

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  // Apply dark mode to document root
  useEffect(() => {
    const root = document.documentElement;
    if (state.darkMode) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [state.darkMode]);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'bookmarks':
        return <BookmarksPage />;
      case 'analytics':
        return <AnalyticsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header
        onToggleDarkMode={toggleDarkMode}
        darkMode={state.darkMode}
        onShowCreateModal={() => setShowCreateModal(true)}
      />

      <Navigation
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>

      {/* User Details Modal */}
      {state.currentUser && (
        <UserDetails
          user={state.currentUser}
          onClose={() => dispatch({ type: 'SET_CURRENT_USER', payload: null })}
        />
      )}

      {/* Create User Modal */}
      <CreateUserModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
};

export default Layout; 