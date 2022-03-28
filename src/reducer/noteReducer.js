const noteInitialState = { notes: [] };
const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const noteReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_NEW_NOTE:
      return { ...state, notes: [...payload] };
    case UPDATE_NOTE:
      return { ...state, notes: [...payload] };
    case DELETE_NOTE:
      return { ...state, notes: [...payload] };
    default:
      return { ...state };
  }
};

export { noteReducer, noteInitialState };
