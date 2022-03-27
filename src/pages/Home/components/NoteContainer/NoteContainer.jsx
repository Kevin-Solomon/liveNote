import React, { useEffect, useState } from 'react';
import { NoteCard } from '../../../../components/NoteCard/NoteCard';
import axios from 'axios';
import { useAuth } from '../../../../context/auth/authContext';
import { useNotes } from '../../../../hooks/useNotes';
export const NoteContainer = () => {
  const { user } = useAuth();
  const [notes] = useNotes();

  return (
    <section className="note-wrapper">
      <div className="note-card">
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          perferendis!
        </p>
      </div>
      <NoteCard />
    </section>
  );
};
