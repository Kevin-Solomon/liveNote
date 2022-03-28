import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Landing } from './pages/Landing/Landing';
import { Login } from './pages/Login/Login';
import Mockman from 'mockman-js';
import { Signup } from './pages/Signup/Signup';
import NoteEditor from './pages/NoteEditor/NoteEditor';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mockman" element={<Mockman />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/singlenote" element={<NoteEditor />} />
      <Route path="/singlenote/:singlenoteId" element={<NoteEditor />} />
    </Routes>
  );
}

export default App;
