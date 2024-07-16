import React, { useEffect, useRef } from 'react'
import Banner from './Banner'
import Financier from './Financier'
import About from './About'
import ServiceSection from './Service_Section'
import ClientSection from './Client_Section'
import Footer1 from '../Navbar/Footer1'
import Nav1 from '../Navbar/Nav1'

const HomePage = () => {
  useEffect(() => { 
    window.scrollTo(0,0);
  }, []);

  const footerRef = useRef(null);
  const ServicerRef = useRef(null);
  
  const handleLinkClick = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  <div ref={footerRef}></div>
  const ServiceClick  = () =>{
        if (ServicerRef.current) {
          ServicerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
  return (
    <>
    <div className="zoom-in-out-box">
      <Nav1 handleLinkClick={handleLinkClick}  ServiceClick={ServiceClick}/>
      <Banner />
      </div>
      <Financier ServiceClick={ServiceClick}/>
      <About />
      <div ref={ServicerRef}>
      <ServiceSection />
      </div>
      <ClientSection/>
      <div ref={footerRef}>
      <Footer1/>
      </div>
    </>
  )
}

export default HomePage
