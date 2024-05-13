import React from 'react';
import { BrowserRouter as Router, Routes, Route,Switch } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import TransitionHover from './components/TransitionHover';
import Home from './components/home';
import About from './components/about';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/transition-hover" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
    </Routes>
    </Router>
  );
}

export default App;