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
  const [note, setNote] = useState({
    text: '',
    backgroundColor: '🔴 red',
    tags: [],
  });
  const params = useParams();
  useEffect(() => {
    const selectedNote = noteState.notes.filter(
      note => note._id === params.singlenoteId
    );
    if (selectedNote.length === 0) {
      setValue('');
    } else {
      setValue(selectedNote[0].value.text);
      setNote(prevState => ({
        ...prevState,
        backgroundColor: selectedNote[0].value.backgroundColor,
      }));
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
            setNote(prevState => ({ ...prevState, text: value }));
          }}
        />
        <select
          value={note.backgroundColor}
          onChange={e => {
            console.log(e.target.name);
            setNote(prevState => ({
              ...prevState,
              backgroundColor: e.target.value,
            }));
          }}
          className="background-select"
        >
          <option name="red">red</option>
          <option name="blue">blue </option>
          <option name="green">grey</option>
        </select>
        <div>
          <button
            className="btn primary-btn"
            onClick={() => {
              const selectedNote = noteState.notes.filter(
                note => note._id === params.singlenoteId
              );
              console.log(selectedNote);
              if (selectedNote.length === 0) {
                addNewNote(note, user.token, noteDispatch);
              } else {
                updateNote(params.singlenoteId, note, user.token, noteDispatch);
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
