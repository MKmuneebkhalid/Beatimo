import React from "react";
import "./style.css";
import rectangleImage from '../components/assests/rectangle-1051.png';
import group4091 from '../components/assests/group-40941.png';
import groupImage from '../components/assests/group.png';

export const SiteSelection = () => {
  return (
    <div className="site-selection">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="rectangle" alt="Rectangle" src={rectangleImage} />
          <div className="frame">
            <p className="heading-example">
              Conseils actuariels de pointe pour maximiser la performance de vos investissements immobiliers.
            </p>
            <div className="div-wrapper">
              <div className="text-wrapper">DÉCOUVRIR SERVICES-CONSEILS</div>
            </div>
          </div>
          <img className="group" alt="Group" src={group4091} />
          <div className="div" />
          <div className="frame-2">
            <p className="heading-example">
              Une société performante avec l&#39;objectif de créer de la valeur à travers l&#39;investissement
              immobilier.
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