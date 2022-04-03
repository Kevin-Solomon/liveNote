const getCategoryList = ({ tags }, notes) => {
  console.log(tags);
  if (tags === null) {
    return notes;
  } else {
    return notes.filter(note => note.tags.includes(tags));
  }
};

export { getCategoryList };
