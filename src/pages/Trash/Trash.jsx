import React from 'react';
import { useDeletedNotes } from '../../context/deletedNotes/deletedNotes';
import { NoteContainer } from '../Home/components/NoteContainer/NoteContainer';
import Sidebar from '../Home/components/Sidebar/Sidebar';
import { Navbar } from '../../components/Navbar/Navbar';
function Trash() {
  const { deletedNotes } = useDeletedNotes();
  console.log(deletedNotes);
  return (
    <>
      <div className="body-center">
        <Navbar />
        <main className="note-container">
          <Sidebar />
          <NoteContainer notes={deletedNotes.deletedNotes} inTrash />
        </main>
      </div>
    </>
  );
}

export default Trash;