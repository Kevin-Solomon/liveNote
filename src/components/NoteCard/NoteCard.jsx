import React from 'react';
import './NoteCard.css';
import {
  MdOutlineColorLens,
  MdOutlineInsertPhoto,
  MdArchive,
} from 'react-icons/md';
export const NoteCard = () => {
  return (
    <div className="note-card">
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
        perferendis!
      </p>
      <div className="note-icons-container">
        <span className="note-icons">
          <MdOutlineColorLens />
        </span>
        <span className="note-icons">
          <MdOutlineInsertPhoto />
        </span>
        <span className="note-icons">
          <MdArchive />
        </span>
      </div>
    </div>
  );
};
