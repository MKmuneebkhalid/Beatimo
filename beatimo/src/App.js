import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import TransitionHover from './components/TransitionHover';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/transition-hover" element={<TransitionHover />} />
      </Routes>
    </Router>
  );
}

export default App;