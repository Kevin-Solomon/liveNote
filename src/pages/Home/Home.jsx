import React from 'react';
import './Home.css';
import { Navbar } from '../../components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { NoteContainer } from './components/NoteContainer/NoteContainer';
import { notesState, useNotes } from './../../context/notes/noteContext';
export const Home = () => {
  const { noteState } = useNotes();
  console.log(noteState);
  return (
    <div className="body-center">
      <Navbar />
      <main className="note-container">
        <Sidebar inHome />
        <NoteContainer notes={noteState.notes} inHome />
      </main>
    </div>
  );
};
