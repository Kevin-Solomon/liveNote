export const initialFilterState = { sortBy: null, tags: [] };
export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LATEST_FIRST':
      return { ...state, sortBy: 'LATEST_FIRST' };
    case 'OLDEST_FIRST':
      return { ...state, sortBy: 'OLDEST_FIRST' };
    default:
      return { ...state };
  }
};
