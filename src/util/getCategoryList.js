const getCategoryList = ({ tags }, notes) => {
  if (tags === null) {
    return notes;
  } else {
    return notes.filter(note => note.tags.includes(tags));
  }
};

export { getCategoryList };
