import Home from './pages/Home';
import './style.scss';
import './normalize.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Universalis from './pages/Universalis';
import Plante from './pages/Plante';
import Creations from './pages/Creations';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/universalis" element={<Universalis />} />
        <Route path="/plant-e" element={<Plante />} />
        <Route path="/creations" element={<Creations />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
