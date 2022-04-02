import { createContext, useContext, useState } from 'react';
const DeletedNotes = createContext({ deletedNotes: [] });

const DeletedNotesProvider = ({ children }) => {
  const [deletedNotes, setDeletedNotes] = useState({ deletedNotes: [] });
  return (
    <DeletedNotes.Provider value={{ deletedNotes, setDeletedNotes }}>
      {children}
    </DeletedNotes.Provider>
  );
};

const useDeletedNotes = () => useContext(DeletedNotes);

export { DeletedNotesProvider, useDeletedNotes };
