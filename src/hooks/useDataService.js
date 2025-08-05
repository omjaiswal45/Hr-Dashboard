import useAppContext from './useAppContext';
import { generateMockData } from '../utils/generateMockData';

const useDataService = () => {
  const { dispatch } = useAppContext();

  const fetchUsers = async (retryCount = 0) => {
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      console.log(`Attempt ${retryCount + 1}: Fetching users from DummyJSON...`);

      const fetchOptions = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Accept': 'application/json',
        },
      };

      const response = await fetch('https://dummyjson.com/users?limit=20', fetchOptions);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('✅ Successfully fetched from API:', data);

      if (data.users && Array.isArray(data.users) && data.users.length > 0) {
        const enhancedUsers = generateMockData(data.users);
        dispatch({ type: 'SET_USERS', payload: enhancedUsers });
        dispatch({ type: 'SET_ERROR', payload: null });
        console.log('✅ Users loaded successfully:', enhancedUsers.length);
        return;
      } else {
        throw new Error('Invalid data structure received from API');
      }

    } catch (error) {
      console.error(`❌ API call failed (attempt ${retryCount + 1}):`, error);

      if (retryCount === 0) {
        console.log('🔄 Retrying API call...');
        setTimeout(() => fetchUsers(1), 1000);
        return;
      }

      console.log('🔄 Using fallback data...');

      const fallbackUsers = [
        {
          id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@company.com', age: 28,
          phone: '+1-555-1001', image: 'https://randomuser.me/api/portraits/men/1.jpg',
          address: { city: 'New York', state: 'NY' }
        },
        {
          id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@company.com', age: 32,
          phone: '+1-555-1002', image: 'https://randomuser.me/api/portraits/women/1.jpg',
          address: { city: 'Los Angeles', state: 'CA' }
        },
        {
          id: 3, firstName: 'Mike', lastName: 'Johnson', email: 'mike.johnson@company.com', age: 29,
          phone: '+1-555-1003', image: 'https://randomuser.me/api/portraits/men/2.jpg',
          address: { city: 'Chicago', state: 'IL' }
        },
        {
          id: 4, firstName: 'Sarah', lastName: 'Williams', email: 'sarah.williams@company.com', age: 27,
          phone: '+1-555-1004', image: 'https://randomuser.me/api/portraits/women/2.jpg',
          address: { city: 'Houston', state: 'TX' }
        },
        {
          id: 5, firstName: 'David', lastName: 'Brown', email: 'david.brown@company.com', age: 31,
          phone: '+1-555-1005', image: 'https://randomuser.me/api/portraits/men/3.jpg',
          address: { city: 'Phoenix', state: 'AZ' }
        },
        {
          id: 6, firstName: 'Emma', lastName: 'Garcia', email: 'emma.garcia@company.com', age: 26,
          phone: '+1-555-1006', image: 'https://randomuser.me/api/portraits/women/3.jpg',
          address: { city: 'Philadelphia', state: 'PA' }
        },
        {
          id: 7, firstName: 'Chris', lastName: 'Miller', email: 'chris.miller@company.com', age: 30,
          phone: '+1-555-1007', image: 'https://randomuser.me/api/portraits/men/4.jpg',
          address: { city: 'San Antonio', state: 'TX' }
        },
        {
          id: 8, firstName: 'Lisa', lastName: 'Davis', email: 'lisa.davis@company.com', age: 33,
          phone: '+1-555-1008', image: 'https://randomuser.me/api/portraits/women/4.jpg',
          address: { city: 'San Diego', state: 'CA' }
        },
        {
          id: 9, firstName: 'Tom', lastName: 'Rodriguez', email: 'tom.rodriguez@company.com', age: 25,
          phone: '+1-555-1009', image: 'https://randomuser.me/api/portraits/men/5.jpg',
          address: { city: 'Dallas', state: 'TX' }
        },
        {
          id: 10, firstName: 'Anna', lastName: 'Martinez', email: 'anna.martinez@company.com', age: 28,
          phone: '+1-555-1010', image: 'https://randomuser.me/api/portraits/women/5.jpg',
          address: { city: 'San Jose', state: 'CA' }
        },
        {
          id: 11, firstName: 'Alex', lastName: 'Wilson', email: 'alex.wilson@company.com', age: 29,
          phone: '+1-555-1011', image: 'https://randomuser.me/api/portraits/men/6.jpg',
          address: { city: 'Austin', state: 'TX' }
        },
        {
          id: 12, firstName: 'Maria', lastName: 'Anderson', email: 'maria.anderson@company.com', age: 34,
          phone: '+1-555-1012', image: 'https://randomuser.me/api/portraits/women/6.jpg',
          address: { city: 'Jacksonville', state: 'FL' }
        },
        {
          id: 13, firstName: 'Kevin', lastName: 'Taylor', email: 'kevin.taylor@company.com', age: 27,
          phone: '+1-555-1013', image: 'https://randomuser.me/api/portraits/men/7.jpg',
          address: { city: 'Fort Worth', state: 'TX' }
        },
        {
          id: 14, firstName: 'Rachel', lastName: 'Thomas', email: 'rachel.thomas@company.com', age: 26,
          phone: '+1-555-1014', image: 'https://randomuser.me/api/portraits/women/7.jpg',
          address: { city: 'Columbus', state: 'OH' }
        },
        {
          id: 15, firstName: 'Ryan', lastName: 'Jackson', email: 'ryan.jackson@company.com', age: 31,
          phone: '+1-555-1015', image: 'https://randomuser.me/api/portraits/men/8.jpg',
          address: { city: 'Charlotte', state: 'NC' }
        },
        {
          id: 16, firstName: 'Amy', lastName: 'White', email: 'amy.white@company.com', age: 24,
          phone: '+1-555-1016', image: 'https://randomuser.me/api/portraits/women/8.jpg',
          address: { city: 'San Francisco', state: 'CA' }
        },
        {
          id: 17, firstName: 'Daniel', lastName: 'Harris', email: 'daniel.harris@company.com', age: 35,
          phone: '+1-555-1017', image: 'https://randomuser.me/api/portraits/men/9.jpg',
          address: { city: 'Indianapolis', state: 'IN' }
        },
        {
          id: 18, firstName: 'Jessica', lastName: 'Martin', email: 'jessica.martin@company.com', age: 28,
          phone: '+1-555-1018', image: 'https://randomuser.me/api/portraits/women/9.jpg',
          address: { city: 'Seattle', state: 'WA' }
        },
        {
          id: 19, firstName: 'Mark', lastName: 'Thompson', email: 'mark.thompson@company.com', age: 32,
          phone: '+1-555-1019', image: 'https://randomuser.me/api/portraits/men/10.jpg',
          address: { city: 'Denver', state: 'CO' }
        },
        {
          id: 20, firstName: 'Lauren', lastName: 'Garcia', email: 'lauren.garcia@company.com', age: 30,
          phone: '+1-555-1020', image: 'https://randomuser.me/api/portraits/women/10.jpg',
          address: { city: 'Washington', state: 'DC' }
        }
      ];

      const enhancedFallbackUsers = generateMockData(fallbackUsers);
      dispatch({ type: 'SET_USERS', payload: enhancedFallbackUsers });
      console.log('✅ Fallback data loaded:', enhancedFallbackUsers.length, 'users');
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return { fetchUsers };
};

export default useDataService; 