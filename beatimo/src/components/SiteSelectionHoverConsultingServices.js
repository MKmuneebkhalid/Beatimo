import React from "react";
import "./style.css";

import rectangleImage from '../components/assests/rectangle-1052.png';
import group4091 from '../components/assests/group-40941.png';
import groupImage from '../components/assests/group.png';
import groupImage2 from '../components/assests/Group2.png';

export const SiteSelectionHoverConsultingServices = () => {
  return (
    <div className="site-selection-Hover-Consulting-Service">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="group" alt="Group" src={group4091} />
          <div className="rectangle" />
          <img className="img" alt="Rectangle" src={rectangleImage} />
          <div className="frame">
            <p className="heading-example">
              Conseils actuariels de pointe pour maximiser la performance de vos investissements immobiliers.
            </p>
            <div className="d-couvrir-services-wrapper">
              <div className="d-couvrir-services">DÉCOUVRIR SERVICES-CONSEILS</div>
            </div>
          </div>
          <img className="group-2" alt="Group" src={groupImage} />
          <img className="group-3" alt="Group" src={groupImage2} />
        </div>
      </div>
    </div>
  );
};
export default SiteSelectionHoverConsultingServices;