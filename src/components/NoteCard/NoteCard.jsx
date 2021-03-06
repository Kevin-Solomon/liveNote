import React from 'react';
import './NoteCard.css';
import {
  MdOutlineColorLens,
  MdOutlineInsertPhoto,
  MdArchive,
  MdUnarchive,
} from 'react-icons/md';
import { FaTrashRestore } from 'react-icons/fa';
import { IoTrashBinOutline } from 'react-icons/io5';
import ReactHtmlParser from 'react-html-parser';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';
import { deleteNote } from '../../util';
import { useNotes } from '../../context/notes/noteContext';
import { archiveNote } from '../../util/archiveNote';
import { restoreArchiveNote } from '../../util/restoreArchiveNote';
import { deleteArchiveNote } from '../../util/deleteArchiveNote';
import { useDeletedNotes } from '../../context/deletedNotes/deletedNotes';
import { addNewNote } from '../../util';
export const NoteCard = ({
  _id,
  title,
  createdAt,
  content,
  tags,
  inArchive,
  inHome,
  inTrash,
  backgroundColor,
  priority,
}) => {
  console.log(tags, priority, backgroundColor);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { noteDispatch } = useNotes();
  const { setDeletedNotes } = useDeletedNotes();
  const getBackgroundColor = backgroundColor => {
    if (backgroundColor.includes('red')) return '#5c2b29';
    if (backgroundColor.includes('blue')) return '#2d555e';
    if (backgroundColor.includes('purple')) return '#6c63ff';
  };
  return (
    <div
      style={{ backgroundColor: getBackgroundColor(backgroundColor) }}
      className="note-card"
      onClick={() => {
        return inArchive || inTrash ? null : navigate(`/singlenote/${_id}`);
      }}
    >
      <h2>{title}</h2>
      <p>{ReactHtmlParser(content)}</p>
      <div className="note-card-footer">
        <div>
          <span className="small-text">{createdAt}</span>
          <div className="priority-label">{priority}</div>
        </div>

        <div className="note-icons-container">
          {inArchive ? (
            <span
              className="note-icons"
              onClick={e => {
                e.stopPropagation();
                restoreArchiveNote(_id, user.token, noteDispatch);
              }}
            >
              <MdUnarchive />
            </span>
          ) : inTrash ? null : (
            <span
              className="note-icons"
              onClick={e => {
                e.stopPropagation();
                archiveNote(
                  _id,
                  {
                    _id,
                    title,
                    createdAt,
                    content,
                    tags,
                    backgroundColor,
                    priority,
                  },
                  user.token,
                  noteDispatch
                );
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
                setDeletedNotes(prevState => ({
                  deletedNotes: [
                    ...prevState.deletedNotes,
                    {
                      _id,
                      text: content,
                      tags,
                      backgroundColor,
                      priority,
                      createdAt,
                    },
                  ],
                }));
                deleteArchiveNote(_id, user.token, noteDispatch);
              }}
            >
              <IoTrashBinOutline />
            </span>
          ) : null}
          {inHome ? (
            <span
              className="note-icons"
              onClick={e => {
                setDeletedNotes(prevState => ({
                  deletedNotes: [
                    ...prevState.deletedNotes,
                    {
                      _id,
                      text: content,
                      tags,
                      backgroundColor,
                      priority,
                      createdAt,
                    },
                  ],
                }));
                e.stopPropagation();
                deleteNote(_id, user.token, noteDispatch);
              }}
            >
              <IoTrashBinOutline />
            </span>
          ) : null}
          {inTrash ? (
            <span
              className="note-icons"
              onClick={e => {
                e.stopPropagation();
                setDeletedNotes(prevState => ({
                  deletedNotes: [
                    ...prevState.deletedNotes.filter(note => note._id !== _id),
                  ],
                }));
              }}
            >
              <IoTrashBinOutline />
            </span>
          ) : null}
          {inTrash ? (
            <span
              className="note-icons"
              onClick={e => {
                e.stopPropagation();
                setDeletedNotes(prevState => ({
                  deletedNotes: [
                    ...prevState.deletedNotes.filter(note => note._id !== _id),
                  ],
                }));
                addNewNote(
                  {
                    _id,

                    text: content,
                    tags,
                    backgroundColor,
                    priority,
                    createdAt,
                  },
                  user.token,
                  noteDispatch
                );
              }}
            >
              <FaTrashRestore />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};
