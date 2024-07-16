import React, { useEffect, useRef } from 'react'
import CarrierSlider from './CarrierSlider';
import DansSection from './DansSection';
import CarrierService from './CarrierService';
import Nav1 from '../Navbar/Nav1';
import Footer1 from '../Navbar/Footer1';
const CarrierPage = () => {
  const ServicerRef = useRef(null);
  const footerRef = useRef(null);
  
  const handleLinkClick = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  const serviceClick  = () =>{
        if (ServicerRef.current) {
          ServicerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
      useEffect(() => { 
        window.scrollTo(0,0);
      }, []);
      
  return (
    <>
      <Nav1 handleLinkClick={handleLinkClick} />
      <CarrierSlider serviceClick={serviceClick}/>
      <DansSection />
      <div ref={ServicerRef}>
      <CarrierService />
      </div>
      <div ref={footerRef}>
      <Footer1 />
      </div>
    </>
  )
}

export default CarrierPage
