import React, { useState } from 'react';

import ReactQuill from 'react-quill';
import { saveNoteHandler } from './../../util/saveNoteHandler';
import { useAuth } from './../../context/auth/authContext';
import './NoteEditor.css';
import { Navbar } from '../../components/Navbar/Navbar';
function NoteEditor() {
  const { user } = useAuth();
  const [value, setValue] = useState('');
  console.log(value);
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
            onClick={async () => {
              await saveNoteHandler(user.token, value);
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
