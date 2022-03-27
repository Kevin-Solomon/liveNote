import { createContext, useContext, useReducer } from 'react';
import { noteReducer, noteInitialState } from '../../reducer/noteReducer';
const NoteContext = createContext({ notes: [] });
const NoteProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(noteReducer, noteInitialState);
  return (
    <NoteContext.Provider value={{ noteState, noteDispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNotes = () => useContext(NoteContext);
export { useNotes, NoteProvider };
