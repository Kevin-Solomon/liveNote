export const initialFilterState = { sortBy: null, tags: null, priority: null };
export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LATEST_FIRST':
      return { ...state, sortBy: 'LATEST_FIRST' };
    case 'OLDEST_FIRST':
      return { ...state, sortBy: 'OLDEST_FIRST' };
    case 'TAGS':
      console.log('in tags', payload);
      return { ...state, tags: payload };
    case 'HIGH_TO_LOW':
      console.log('in tags', payload);
      return { ...state, priority: type };
    case 'LOW_TO_HIGH':
      console.log('in tags', payload);
      return { ...state, priority: type };
    default:
      return { ...state };
  }
};
