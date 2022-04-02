export const initialFilterState = { sortBy: null, tags: [] };
export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LATEST_FIRST':
      return { ...state, sortBy: 'LATEST_FIRST' };
    case 'OLDEST_FIRST':
      return { ...state, sortBy: 'OLDEST_FIRST' };
    case 'TAGS':
      console.log('in tags', payload);
      return { ...state, tags: payload };
    default:
      return { ...state };
  }
};
