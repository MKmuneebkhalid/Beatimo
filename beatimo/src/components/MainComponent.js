import React, { useState } from 'react';
import SiteSelection from './SiteSelection';
import SiteSelectionHoverConsultingServices from './SiteSelectionHoverConsultingServices';

const MainComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="main-container">
      <div
        className="left-side"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
