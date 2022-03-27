import React from 'react';
import './NoteCard.css';
import {
  MdOutlineColorLens,
  MdOutlineInsertPhoto,
  MdArchive,
} from 'react-icons/md';
import ReactHtmlParser from 'react-html-parser';
import { useNavigate } from 'react-router-dom';
export const NoteCard = ({ _id, title, content }) => {
  const navigate = useNavigate();
  return (
    <div
      className="note-card"
      onClick={() => {
        navigate(`/singlenote/${_id}`);
      }}
    >
      <h2>{title}</h2>
      <p>{ReactHtmlParser(content)}</p>
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
