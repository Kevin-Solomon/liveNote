export const getSortedList = ({ sortBy }, list) => {
  if (sortBy === 'LATEST_FIRST') {
    return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sortBy === 'OLDEST_FIRST') {
    return list.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  } else {
    return list;
  }
};
