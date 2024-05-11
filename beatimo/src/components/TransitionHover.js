import React, { useEffect, useState } from "react";
import "./style.css";
import group40941 from "../components/assests/TransitionHover/group-40941.png";
import rectangle1051 from "../components/assests/TransitionHover/rectangle-1051.png";

const TransitionHover = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Trigger the expansion effect on the image immediately after mounting
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 50); // A slight delay to ensure CSS is loaded and DOM is ready

    return () => clearTimeout(timer); // Cleanup the timer if component unmounts early
  }, []);

  return (
    <div className="transition-hover">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="group" alt="Group" src={group40941} />
          <div className="rectangle" />
          <img className={`img ${isExpanded ? 'expanded' : ''}`} alt="Rectangle" src={rectangle1051} />
        </div>
      </div>
    </div>
  );
};

export default TransitionHover;
