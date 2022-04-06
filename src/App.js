import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Landing } from './pages/Landing/Landing';
import { Login } from './pages/Login/Login';
import Mockman from 'mockman-js';
import { Signup } from './pages/Signup/Signup';
import NoteEditor from './pages/NoteEditor/NoteEditor';
import Archive from './pages/Archive/Archive';
import Trash from './pages/Trash/Trash';
import Label from './pages/Label/Label';
import AuthRequired from './components/AuthRequired/AuthRequired';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/home"
        element={
          <AuthRequired>
            <Home />
          </AuthRequired>
        }
      />
      <Route
        path="/archive"
        element={
          <AuthRequired>
            <Archive />
          </AuthRequired>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/trash"
        element={
          <AuthRequired>
            <Trash />
          </AuthRequired>
        }
      />
      <Route path="/mockman" element={<Mockman />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/singlenote"
        element={
          <AuthRequired>
            <NoteEditor />
          </AuthRequired>
        }
      />
      <Route
        path="/singlenote/:singlenoteId"
        element={
          <AuthRequired>
            <NoteEditor />
          </AuthRequired>
        }
      />
      <Route
        path="/label"
        element={
          <AuthRequired>
            <Label />
          </AuthRequired>
        }
      />
    </Routes>
  );
}

export default App;
