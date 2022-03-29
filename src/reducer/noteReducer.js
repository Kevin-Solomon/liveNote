const noteInitialState = { notes: [], archives: [] };
const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const ARCHIVE_NOTE = 'ARCHIVE_NOTE';
const RESTORE_ARCHIVE_NOTE = 'RESTORE_ARCHIVE_NOTE';
const DELETE_ARCHIVE_NOTE = 'DELETE_ARCHIVE_NOTE';
const noteReducer = (state, { type, payload }) => {
  console.log('in dispatch');
  switch (type) {
    case ADD_NEW_NOTE:
      return { ...state, notes: [...payload] };
    case UPDATE_NOTE:
      return { ...state, notes: [...payload] };
    case DELETE_NOTE:
      return { ...state, notes: [...payload] };
    case ARCHIVE_NOTE:
      return { ...state, ...payload };
    case RESTORE_ARCHIVE_NOTE:
      return { ...state, ...payload };
    case DELETE_ARCHIVE_NOTE:
      console.log('in delete archive');
      return { ...state, archives: [...payload] };
    default:
      return { ...state };
  }
};

export { noteReducer, noteInitialState };
