const getCategoryList = ({ tags }, notes) => {
  if (tags === null || undefined) {
    return notes;
  } else {
    return notes.filter(note => note.tags.includes(tags));
  }
};

export { getCategoryList };
