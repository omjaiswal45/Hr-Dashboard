import useAppContext from './useAppContext';

const useBookmarks = () => {
  const { state, dispatch } = useAppContext();

  const toggleBookmark = (userId) => {
    dispatch({ type: 'TOGGLE_BOOKMARK', payload: userId });
  };

  const isBookmarked = (userId) => {
    return state.bookmarks.includes(userId);
  };

  return { bookmarks: state.bookmarks, toggleBookmark, isBookmarked };
};

export default useBookmarks; 