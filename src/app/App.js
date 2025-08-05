import React, { useEffect } from 'react';
import { AppProvider } from '../context/AppContext';
import Layout from '../layout/Layout';
import useDataService from '../hooks/useDataService';

const HRDashboard = () => {
  const { fetchUsers } = useDataService();

  useEffect(() => {
    fetchUsers();
  }, []);

  return <Layout />;
};

const App = () => {
  return (
    <AppProvider>
      <HRDashboard />
    </AppProvider>
  );
};

export default App; 