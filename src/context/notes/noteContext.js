import { createContext, useContext, useReducer, useEffect } from 'react';
import { noteReducer, noteInitialState } from '../../reducer/noteReducer';
import axios from 'axios';
import { useAuth } from '../auth/authContext';
const NoteContext = createContext({ notes: [], archive: [] });
const NoteProvider = ({ children }) => {
  const { user } = useAuth();
  const [noteState, noteDispatch] = useReducer(noteReducer, noteInitialState);
  useEffect(() => {
    const getNotes = () => {
      const response = axios.get('/api/notes', { authorization: user.token });
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
