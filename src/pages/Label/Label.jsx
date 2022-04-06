import React from 'react';
import { useNotes } from '../../context/notes/noteContext';
import { Navbar } from '../../components/Navbar/Navbar';
import { NoteContainer } from './../Home/components/NoteContainer/NoteContainer';
import Sidebar from './../Home/components/Sidebar/Sidebar';
import MobileNav from './../../components/MobileNav/MobileNav';
function Label() {
  const { noteState } = useNotes();
  console.log(noteState);
  return (
    <div className="body-center">
      <Navbar />
      <main className="note-container">
        <Sidebar />

        <NoteContainer notes={noteState.notes} inLabel />
        <MobileNav />
      </main>
    </div>
  );
}

export default Label;
