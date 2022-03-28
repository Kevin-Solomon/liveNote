import React, { useEffect, useState } from 'react';
import { NoteCard } from '../../../../components/NoteCard/NoteCard';
import { useNotes } from './../../../../context/notes/noteContext';

export const NoteContainer = () => {
  const { noteState } = useNotes();
  return (
    <section className="note-wrapper">
      <NoteCard
        title="Title"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          perferendis!"
      />
      {noteState.notes.map(({ _id, title, value }) => {
        return <NoteCard _id={_id} title={title} content={value} />;
      })}
    </section>
  );
};
