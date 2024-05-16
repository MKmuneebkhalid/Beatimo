import React, { useState } from "react";
import "./style.css";
import rectangleImage from '../components/assests/rectangle-1051.png';
import group4091 from '../components/assests/group-40941.png';
import groupImage from '../components/assests/group.png';
import { useNavigate } from "react-router-dom";

export const SiteSelection = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const handleHoverRectangle = () => {
    setIsHovering(true);
    setTimeout(() => {
      navigate("/site-selection-hover-consulting-services");
      setIsHovering(false);
    }, 700);
  };

  const handleHoverGroup4091 = () => {
    setIsHovering(true);
    setTimeout(() => {
      navigate("/SiteSelectionCapital");
      setIsHovering(false);
    }, 700);
  };
  

  return (
    <div className={`site-selection ${isHovering ? 'fade-out' : ''}`}>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img
            className="rectangle"
            alt="Rectangle"
            src={rectangleImage}
            onMouseOver={handleHoverRectangle}
            onMouseLeave={() => setIsHovering(false)}
          />
          <div className="frame">
            <p className="heading-example">
              Conseils actuariels de pointe pour maximiser la performance de vos investissements immobiliers.
            </p>
            <div className="div-wrapper">
              <div className="text-wrapper">DÉCOUVRIR SERVICES-CONSEILS</div>
            </div>
          </div>
          <img
            className="group"
            alt="Group"
            src={group4091}
          />
          <div className="div"
            onMouseOver={handleHoverGroup4091}
            onMouseLeave={() => setIsHovering(false)}
          >
            DÉCOUVRIR CAPITAL
          </div>
          <div className="frame-2">
            <p className="heading-example">
              Une société performante avec l'objectif de créer de la valeur à travers l'investissement immobilier.
            </p>
            <div className="div-wrapper">
              <div className="text-wrapper">DÉCOUVRIR CAPITAL</div>
            </div>
          </div>
          <img className="img" alt="Group" src={groupImage} />
        </div>
      </div>
    </div>
  );
};

export default SiteSelection;
