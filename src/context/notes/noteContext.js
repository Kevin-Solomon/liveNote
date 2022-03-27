import { createContext, useContext, useReducer, useEffect } from 'react';
import { noteReducer, noteInitialState } from '../../reducer/noteReducer';
const NoteContext = createContext({ notes: [] });
const NoteProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(noteReducer, noteInitialState);
  useEffect(() => {
    const getNotes = () => {
      const response = axios.get('/api/notes', { auth });
    };
    getNotes();
  }, []);
  return (
    <NoteContext.Provider value={{ noteState, noteDispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNotes = () => useContext(NoteContext);
export { useNotes, NoteProvider };
