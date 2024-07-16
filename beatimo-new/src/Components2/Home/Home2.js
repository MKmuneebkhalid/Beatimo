import React, { useEffect, useRef } from 'react'
import Navbar from '../CommanPage/Navbar'
import Banner from './Banner'
import AboutSection from './AboutSection'
import ClientSection from './ClientSection'
import Footer from '../CommanPage/Footer'
import FinnencierSection2 from './FinnencierSection2'


const Home2 = () => {
    const footerRef = useRef(null);
    const handleLinkClick = () => {
      if (footerRef.current) {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    useEffect(() => {
            window.scrollTo(0, 0);
      }, []);
    
  return (
    <>
   <div className='zoom-in-out-box'>
    <Navbar handleLinkClick={handleLinkClick } />
    <Banner />
    </div>
    <FinnencierSection2 />
    <AboutSection />
    <ClientSection />
    <div ref={footerRef}>
    <Footer/>
    </div>
   </>

  )
}

export default Home2;
