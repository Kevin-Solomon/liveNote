import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth/authContext';
import { NoteProvider } from './context/notes/noteContext';
import { FilterProvider } from './context/filter/filterContext';
import { DeletedNotesProvider } from './context/deletedNotes/deletedNotes';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NoteProvider>
          <DeletedNotesProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </DeletedNotesProvider>
        </NoteProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
