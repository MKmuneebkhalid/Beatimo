import React, { useEffect, useRef } from "react";
import ProposeBanner from "./ProposeBanner";
import MissionAndVision from "./MissionAndVision";
import ProposeAbout from "./ProposeAbout";
import ValeurSection from "./Valeur-section";
import ProposeService from "./ProposeService";
import Footer1 from "../Navbar/Footer1";
import Nav1 from "../Navbar/Nav1";

const ProposPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const footerRef = useRef(null);
  const valeur = useRef(null);
  
  const valeurClick = () => {
    if (valeur.current) {
      valeur.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      
<Nav1  handleLinkClick={handleLinkClick}/>
      <ProposeBanner />
      <MissionAndVision valeurClick={valeurClick} />
        <ProposeService />
      <ProposeAbout />
      <div ref={valeur}>
        <ValeurSection />
      </div>
      <div ref={footerRef}>
        <Footer1 />
      </div>
    </>
  );
};

export default ProposPage;
