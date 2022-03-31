import React from 'react';
import './Home.css';
import { Navbar } from '../../components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { NoteContainer } from './components/NoteContainer/NoteContainer';
import { notesState, useNotes } from './../../context/notes/noteContext';
export const Home = () => {
  const { noteState } = useNotes();
  return (
    <div className="body-center">
      <Navbar />
      <main className="note-container">
        <Sidebar />
        <NoteContainer notes={noteState.notes} />
      </main>
    </div>
  );
};
