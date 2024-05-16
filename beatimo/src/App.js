import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import Home from './components/home';
import About from './components/about';
import TransitionHover from './components/TransitionHover';
import SiteSelection from './components/SiteSelection';
import SiteSelectionHoverConsultingServices from './components/SiteSelectionHoverConsultingServices';
import SiteSelectionCapital from './components/Capital/SiteSelectionCapital';
import CapitalHome from './components/Capital/CapitalHome';
import { CapitalAbout } from './components/Capital/CapitalAbout';
import Career from './components/Career';
import OverlayServices from './components/OverlayServices';
function App() {
  console.log('App Component Loaded');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SiteSelection />} />
        <Route path="/transition-hover" element={<TransitionHover />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/CapitalHome" element={<CapitalHome />} />
        <Route path="/CapitalAbout" element={<CapitalAbout />} />
        <Route path="/site-selection-hover-consulting-services" element={<SiteSelectionHoverConsultingServices />} />
        <Route path="/SiteSelectionCapital" element={<SiteSelectionCapital />} />
      </Routes>
    </Router>
  );
}

export default App;
