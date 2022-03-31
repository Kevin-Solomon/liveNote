import React from 'react';
import './NoteCard.css';
import {
  MdOutlineColorLens,
  MdOutlineInsertPhoto,
  MdArchive,
} from 'react-icons/md';
import { IoTrashBinOutline } from 'react-icons/io5';
import ReactHtmlParser from 'react-html-parser';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';
import { deleteNote } from '../../util';
import { useNotes } from '../../context/notes/noteContext';
import { archiveNote } from '../../util/archiveNote';
import { restoreArchiveNote } from '../../util/restoreArchiveNote';
import { deleteArchiveNote } from '../../util/deleteArchiveNote';
export const NoteCard = ({
  _id,
  title,
  createdAt,
  content,
  tags,
  inArchive,
}) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { noteDispatch } = useNotes();
  return (
    <div
      className="note-card"
      onClick={() => {
        navigate(`/singlenote/${_id}`);
      }}
    >
      <h2>{title}</h2>
      <p>{ReactHtmlParser(content)}</p>
      <div className="note-card-footer">
        <span className="small-text">{createdAt}</span>
        <div className="note-icons-container">
          <span className="note-icons">
            <MdOutlineColorLens />
          </span>
          <span className="note-icons">
            <MdOutlineInsertPhoto />
          </span>
          {inArchive ? (
            <span
              className="note-icons"
              onClick={e => {
                e.stopPropagation();
                restoreArchiveNote(_id, user.token, noteDispatch);
              }}
            >
              <MdArchive className="archive-icon" />
            </span>
          ) : (
            <span
              className="note-icons"
              onClick={e => {
                e.stopPropagation();
                archiveNote(_id, content, user.token, noteDispatch);
              }}
            >
              <MdArchive />
            </span>
          )}
          {inArchive ? (
            <span
              className="note-icons"
              onClick={e => {
                e.stopPropagation();
                deleteArchiveNote(_id, user.token, noteDispatch);
              }}
            >
              <IoTrashBinOutline className="archive-icon" />
            </span>
          ) : (
            <span
              className="note-icons"
              onClick={e => {
                e.stopPropagation();
                deleteNote(_id, user.token, noteDispatch);
              }}
            >
              <IoTrashBinOutline />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
