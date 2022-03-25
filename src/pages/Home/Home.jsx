import React from 'react';
import './Home.css';
import { Navbar } from '../../components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { NoteContainer } from './components/NoteContainer/NoteContainer';
export const Home = () => {
  return (
    <div className="body-center">
      <Navbar />
      <main className="note-container">
        <Sidebar />
        <NoteContainer />
      </main>
    </div>
  );
};
