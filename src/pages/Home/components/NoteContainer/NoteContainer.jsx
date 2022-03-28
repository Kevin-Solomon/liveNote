import React from 'react';
import { NoteCard } from '../../../../components/NoteCard/NoteCard';

export const NoteContainer = ({ notes, inArchive }) => {
  return (
    <section className="note-wrapper">
      <NoteCard
        title="Title"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          perferendis!"
      />
      {notes.map(({ _id, title, value }) => {
        return (
          <NoteCard
            _id={_id}
            title={title}
            content={value}
            inArchive={inArchive}
          />
        );
      })}
    </section>
  );
};
