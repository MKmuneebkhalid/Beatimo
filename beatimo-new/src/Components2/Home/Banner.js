import React, { useEffect, useState } from 'react';

const Banner = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = process.env.PUBLIC_URL + '/assets/image/home-benner-2.png';
        img.onload = () => {
            setTimeout(() => {
                setIsLoaded(true);
            }, 300);
        };
    }, []);

    const backgroundStyle = {
        backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/image/home-benner-2.png'})`,
    };

  return (
    <section className="banner-section  banner-section-2" style={backgroundStyle}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
          <div className={`banner-content ${isLoaded ? 'loaded' : ''}`}>
              <div className="banner-heading">
                <h1>Inspirons <br />
                  les gens <br />
                  à créer de <br />
                  la <span> valeur </span></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Banner
