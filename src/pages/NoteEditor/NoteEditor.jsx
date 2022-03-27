import React, { useState, useEffect } from 'react';

import ReactQuill from 'react-quill';
import { saveNoteHandler } from './../../util/saveNoteHandler';
import { useAuth } from './../../context/auth/authContext';
import './NoteEditor.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { useNotes } from './../../context/notes/noteContext';
import axios from 'axios';
function NoteEditor() {
  const { user } = useAuth();
  console.log(user.token);
  const { noteState, noteDispatch } = useNotes();
  console.log(noteState);
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
  const addNewNote = async () => {
    try {
      const options = { headers: { authorization: user.token } };
      const response = await axios.post(
        '/api/notes',
        { note: { value } },
        options
      );
      noteDispatch({ type: 'ADD_NEW_NOTE', payload: response.data.notes });
    } catch (err) {
      console.log(err.response);
    }
  };
  const updateNote = async _id => {
    try {
      const options = { headers: { authorization: user.token } };
      const response = await axios.post(
        `/api/notes/${_id}`,
        { note: { value } },
        options
      );
      noteDispatch({ type: 'ADD_NEW_NOTE', payload: response.data.notes });
    } catch (err) {
      console.log(err.response);
    }
  };
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
                addNewNote();
              } else {
                updateNote(params.singlenoteId);
              }
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
