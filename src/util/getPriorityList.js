export const getPriorityList = ({ priority }, items) => {
  console.log(items, priority);
  if (priority === null) return items;
  if (priority === 'HIGH_TO_LOW') {
    return items
      .map(item => {
        if (item.priority === 'high') {
          return { ...item, priorityNum: 3 };
        }
        if (item.priority === 'medium') {
          return { ...item, priorityNum: 2 };
        }
        if (item.priority === 'low') {
          return { ...item, priorityNum: 1 };
        }
      })
      .sort((a, b) => b.priorityNum - a.priorityNum);
  }
  if (priority === 'LOW_TO_HIGH') {
    return items
      .map(item => {
        if (item.priority === 'high') {
          return { ...item, priorityNum: 3 };
        }
        if (item.priority === 'medium') {
          return { ...item, priorityNum: 2 };
        }
        if (item.priority === 'low') {
          return { ...item, priorityNum: 1 };
        }
      })
      .sort((a, b) => a.priorityNum - b.priorityNum);
  }
};
