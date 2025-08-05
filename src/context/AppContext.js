import React, { createContext, useContext, useReducer } from 'react';

// App Context
const AppContext = createContext();

// Initial state
const initialState = {
  users: [],
  bookmarks: [],
  darkMode: false,
  currentUser: null,
  searchTerm: '',
  filters: {
    department: [],
    rating: []
  },
  loading: false,
  error: null
};

// Reducer for state management
const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'TOGGLE_BOOKMARK':
      const userId = action.payload;
      const isBookmarked = state.bookmarks.includes(userId);
      return {
        ...state,
        bookmarks: isBookmarked
          ? state.bookmarks.filter(id => id !== userId)
          : [...state.bookmarks, userId]
      };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: action.payload };
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.payload };
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, { ...action.payload, id: Date.now() }]
      };
    default:
      return state;
  }
};

// Context Provider with dark mode initialization
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,
    darkMode: false // Will be initialized in Layout component
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider }; 