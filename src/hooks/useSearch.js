import useAppContext from './useAppContext';

const useSearch = () => {
  const { state, dispatch } = useAppContext();

  const setSearchTerm = (term) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: term });
  };

  const setFilters = (filters) => {
    dispatch({ type: 'SET_FILTERS', payload: filters });
  };

  const filteredUsers = state.users.filter(user => {
    // Handle case where search term is empty
    const searchTerm = state.searchTerm.toLowerCase().trim();

    // Debug logging for new users
    if (user.id > 1000000000000) { // New users have timestamp-based IDs
      console.log('Searching for new user:', {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        department: user.department,
        searchTerm: searchTerm,
        matches: {
          firstName: user.firstName && user.firstName.toLowerCase().includes(searchTerm),
          lastName: user.lastName && user.lastName.toLowerCase().includes(searchTerm),
          email: user.email && user.email.toLowerCase().includes(searchTerm),
          department: user.department && user.department.toLowerCase().includes(searchTerm)
        }
      });
    }

    const matchesSearch = searchTerm === '' ||
      (user.firstName && user.firstName.toLowerCase().includes(searchTerm)) ||
      (user.lastName && user.lastName.toLowerCase().includes(searchTerm)) ||
      (user.email && user.email.toLowerCase().includes(searchTerm)) ||
      (user.department && user.department.toLowerCase().includes(searchTerm));

    const matchesDepartment = state.filters.department.length === 0 ||
      state.filters.department.includes(user.department);

    const matchesRating = state.filters.rating.length === 0 ||
      state.filters.rating.includes(user.rating);

    return matchesSearch && matchesDepartment && matchesRating;
  });

  return {
    searchTerm: state.searchTerm,
    filters: state.filters,
    setSearchTerm,
    setFilters,
    filteredUsers
  };
};

export default useSearch; 