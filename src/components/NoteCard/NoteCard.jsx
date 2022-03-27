import React from 'react';
import './NoteCard.css';
import {
  MdOutlineColorLens,
  MdOutlineInsertPhoto,
  MdArchive,
} from 'react-icons/md';
export const NoteCard = ({ title, content }) => {
  return (
    <div className="note-card">
      <h2>{title}</h2>
      <p>{content}</p>
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
