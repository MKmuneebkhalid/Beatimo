import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";  // Ensure you have this package installed

import rectangle1051 from "../../components/Capital/assets/SiteSelection/rectangle-1051.png";
import group40941 from "../../components/Capital/assets/SiteSelection/group-40941.png";
import group from "../../components/Capital/assets/SiteSelection/group.png";
import capital from "../../components/Capital/assets/SiteSelection/capital.png";

export const SiteSelectionCapital = () => {
  const navigate = useNavigate();
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);  // Trigger the enter transition
  }, []);

  const handleMouseLeaveGroup40941 = () => {
    setInProp(false);  // Set inProp to false to trigger exit transition
    setTimeout(() => navigate("/site-selection-hover-consulting-services"), 250);  // Delay navigation
  };

  const handleSiteSelectionClick = () => {
    setInProp(false);
    setTimeout(() => navigate("/"), 250);  // Delay navigation
  };
  const handleRectangleClick = () => {
    setInProp(false);
    setTimeout(() => navigate("/CapitalHome"), 250);
  };

  return (
    <CSSTransition in={inProp} timeout={250} classNames="fade" unmountOnExit>
      <div className="site-selection-capital">
        <div className="overlap-group-wrapper">
          <div className="overlap-group" onMouseLeave={handleSiteSelectionClick}>
            <img className="rectangle" alt="Rectangle" src={rectangle1051} />
            <div className="frame">
              <p className="heading-example">
                Conseils actuariels de pointe pour maximiser la performance de vos investissements immobiliers.
              </p>
              <div className="div-wrapper">
                <div className="text-wrapper">DÉCOUVRIR SERVICES-CONSEILS</div>
              </div>
            </div>
            <img className="group" alt="Group" src={group40941} onMouseLeave={handleMouseLeaveGroup40941} onClick={handleRectangleClick}/>
            <div className="frame-2">
              <p className="heading-example">
                Une société performante avec l'objectif de créer de la valeur à travers l'investissement immobilier.
              </p>
              <div className="div-wrapper">
                <div className="text-wrapper">DÉCOUVRIR CAPITAL</div>
              </div>
            </div>
            <img className="img" alt="Group" src={group} />
            <img className="capital" alt="Capital" src={capital} />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default SiteSelectionCapital;
