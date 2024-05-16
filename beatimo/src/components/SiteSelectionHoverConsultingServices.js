import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";  // Ensure you have this package installed

import rectangleImage from '../components/assests/rectangle-1052.png';
import group4091 from '../components/assests/group-40941.png';
import groupImage from '../components/assests/group.png';
import groupImage2 from '../components/assests/Group2.png';

export const SiteSelectionHoverConsultingServices = () => {
  const navigate = useNavigate();
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);  // Set inProp to true to trigger enter transition
  }, []);

  const handleMouseLeaveGroup4091 = () => {
    setInProp(false);  // Set inProp to false to trigger exit transition
    setTimeout(() => navigate("/SiteSelectionCapital"),250);  // Delay navigation to allow exit transition
  };

  const handleRectangleClick = () => {
    setInProp(false);
    setTimeout(() => navigate("/home"), 250);
  };

  const handleSiteSelectionClick = () => {
    setInProp(false);
    setTimeout(() => navigate("/"), 250);
  };

  return (
    <CSSTransition in={inProp} timeout={250} classNames="fade" unmountOnExit>
      <div className="site-selection-Hover-Consulting-Service">
        <div className="overlap-group-wrapper">
          <div className="overlap-group" onMouseLeave={handleSiteSelectionClick}>
            <img className="group" alt="Group" src={group4091} />
            <div className="rectangle" />
            <img className="img" alt="Rectangle" src={rectangleImage} onClick={handleRectangleClick} onMouseLeave={handleMouseLeaveGroup4091}/>
            <div className="frame">
              <p className="heading-example">
                Conseils actuariels de pointe pour maximiser la performance de vos investissements immobiliers.
              </p>
              <div className="d-couvrir-services-wrapper">
                <div className="d-couvrir-services">DÉCOUVRIR SERVICES-CONSEILS</div>
              </div>
            </div>
            <img className="group-2" alt="Group" src={groupImage} />
            <img className="group-3" alt="Group" src={groupImage2}/>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default SiteSelectionHoverConsultingServices;
