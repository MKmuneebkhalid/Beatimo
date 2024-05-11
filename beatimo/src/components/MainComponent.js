import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SiteSelection from './SiteSelection';
import SiteSelectionHoverConsultingServices from './SiteSelectionHoverConsultingServices';

const MainComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();  // Hook for navigation

  const handleNavigation = () => {
    navigate('/transition-hover');
  };

  return (
    <div className="main-container">
      <div
        className="left-side"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleNavigation}  // Trigger navigation on click
      >
        <div className={`overlap-group-wrapper ${isHovered ? 'show' : 'hide'}`}>
          <SiteSelectionHoverConsultingServices />
        </div>
        <div className={`overlap-group-wrapper ${!isHovered ? 'show' : 'hide'}`}>
          <SiteSelection />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;