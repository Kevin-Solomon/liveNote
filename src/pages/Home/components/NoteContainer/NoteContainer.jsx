import React, { useEffect, useState } from 'react';
import { NoteCard } from '../../../../components/NoteCard/NoteCard';
import { useNotes } from '../../../../hooks/useNotes';
export const NoteContainer = () => {
  const [notes] = useNotes();
  console.log(notes);
  return (
    <section className="note-wrapper">
      <NoteCard
        title="Title"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          perferendis!"
      />
      {notes.map(({ title, value }) => {
        return <NoteCard title={title} content={value} />;
      })}
    </section>
  );
};
