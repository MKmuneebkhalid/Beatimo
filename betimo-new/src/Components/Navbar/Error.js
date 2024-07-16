import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Nav1 from './Nav1';
import Footer1 from './Footer1';


const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'assets/image/error-1.png',
    'assets/image/error-2.png',
    'assets/image/error-3.png',
    'assets/image/error-4.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <>


<Nav1 />
  
    <section className="error-section ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-top">
              <img src="assets/image/error.png" alt="Error" />
              <div className="carrier-heading">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className={`img-fluid ${index === currentIndex ? 'active' : ''}`}
                    alt={`Img ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<Footer1 />
    </>
  );
};

export default App;

