import React, { useState, useEffect } from 'react';
import { MdOutlineColorLens } from 'react-icons/md';
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
    backgroundColor: 'purple',
    tags: ['productivity'],
    priority: 'low',
  });
  const params = useParams();
  useEffect(() => {
    const selectedNote = noteState.notes.filter(
      note => note._id === params.singlenoteId
    );
    console.log(selectedNote);
    if (selectedNote.length === 0) {
      setValue('');
    } else {
      setValue(selectedNote[0].text);
      setNote(prevState => ({
        ...prevState,
        priority: selectedNote[0].priority,
        backgroundColor: selectedNote[0].backgroundColor,
      }));
    }
  }, []);
  console.log(note);
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
        <div className="note-options">
          <span>
            Color <MdOutlineColorLens />
          </span>
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
            <option name="green">purple</option>
          </select>
          <span>Label </span>
          <select
            className="label-select"
            value={note.tags[0]}
            onChange={e =>
              setNote(prevNote => ({ ...prevNote, tags: [e.target.value] }))
            }
          >
            <option>productivity</option>
            <option>home</option>
            <option>work</option>
          </select>
          <span>Priority </span>
          <select
            className="label-select"
            value={note.priority}
            onChange={e =>
              setNote(prevNote => ({ ...prevNote, priority: e.target.value }))
            }
          >
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
        </div>

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
