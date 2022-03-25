import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Landing } from './pages/Landing/Landing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
