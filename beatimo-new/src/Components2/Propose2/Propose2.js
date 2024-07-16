import React, { useEffect, useRef } from 'react'
import Navbar from '../CommanPage/Navbar'
import Banner2 from './Banner2'
import FinenencierSection2 from './FinenencierSection2'
import CapitalService from './CapitalService'
import CapitalAbout from './CapitalAbout'
import CapitalValeurSection from './CapitalValeurSection'
import Footer from '../CommanPage/Footer'

const Propose2 = () => {
  const footerRef = useRef(null);
  const handleLinkClick = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const ValeurRef = useRef(null);
  const buttonClick = () => {
    if (ValeurRef.current) {
      ValeurRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <>
      <Navbar handleLinkClick={handleLinkClick}/>
      <Banner2 />
      <FinenencierSection2 buttonClick={buttonClick}/>
      <CapitalService />
      <CapitalAbout />
      <div ref={ValeurRef}>
      <CapitalValeurSection />
      </div>
      <div ref={footerRef}>
      <Footer />
      </div>
    </>
  )
}

export default Propose2
