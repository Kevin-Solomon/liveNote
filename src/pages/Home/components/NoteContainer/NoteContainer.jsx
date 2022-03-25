import React from 'react';
import { NoteCard } from '../../../../components/NoteCard/NoteCard';

export const NoteContainer = () => {
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
