import React from 'react';
import { useNotes } from '../../context/notes/noteContext';
import { Navbar } from '../../components/Navbar/Navbar';
import { NoteContainer } from './../Home/components/NoteContainer/NoteContainer';
import Sidebar from './../Home/components/Sidebar/Sidebar';
import MobileNav from '../../components/MobileNav/MobileNav';
function Archive() {
  const { noteState } = useNotes();
  return (
    <div className="body-center">
      <Navbar />
      <main className="note-container">
        <Sidebar inArchive />
        <NoteContainer notes={noteState.archives} inArchive />
        <MobileNav />
      </main>
    </div>
  );
}

export default Archive;
