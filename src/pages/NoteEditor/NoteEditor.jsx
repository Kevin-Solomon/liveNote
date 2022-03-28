import React, { useState, useEffect } from 'react';

import ReactQuill from 'react-quill';
import { useAuth } from './../../context/auth/authContext';
import './NoteEditor.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import { useNotes } from './../../context/notes/noteContext';
import { updateNote, addNewNote } from '../../util';

function NoteEditor() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { noteState, noteDispatch } = useNotes();
  const [value, setValue] = useState('');
  const params = useParams();
  useEffect(() => {
    const selectedNote = noteState.notes.filter(
      note => note._id === params.singlenoteId
    );
    if (selectedNote.length === 0) {
      setValue('');
    } else {
      setValue(selectedNote[0].value);
    }
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="editor-heading">What's on your mind ?</h1>
      <div className="editor-container">
        <ReactQuill
          value={value}
          onChange={value => {
            setValue(value);
          }}
        />
        <div>
          <button
            className="btn primary-btn"
            onClick={() => {
              const selectedNote = noteState.notes.filter(
                note => note._id === params.singlenoteId
              );
              console.log(selectedNote);
              if (selectedNote.length === 0) {
                addNewNote(value, user.token, noteDispatch);
              } else {
                updateNote(
                  params.singlenoteId,
                  value,
                  user.token,
                  noteDispatch
                );
              }
              navigate('/home');
            }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default NoteEditor;
