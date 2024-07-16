import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CarrierSlider = ({serviceClick}) => {
  const settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
        // autoplaySpeed: 1,
    // cssEase: 'ease-in-out',
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>

      <section className="carrier-section ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="carrier-heading">
                <h1>Joignez-vous à <br />
                  notre <span>équipe</span> </h1>
                <div className="carrier-button">
                  <button onClick={serviceClick}>voir les opportunités</button>
                  <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="46.75" y="1.25" width="45.5" height="45.5" rx="22.75" transform="rotate(90 46.75 1.25)" fill="#EEFFF6" />
                    <rect x="46.75" y="1.25" width="45.5" height="45.5" rx="22.75" transform="rotate(90 46.75 1.25)" stroke="#EEFFF6" />
                    <path d="M19 25.6693L20.2083 24.5026L23.1667 27.4609L23.1667 17.3359L24.8333 17.3359L24.8333 27.4609L27.7917 24.5026L29 25.6693L24 30.6693L19 25.6693Z" fill="#007367" />
                  </svg>
                </div>
                <div className="slick-carousel">
                  <Slider {...settings}>
                    <div className="text-center">
                      <img src="assets/image/slider-1.png" className="img-fluid" alt='carrier-slider' />
                    </div>
                    <div className="text-center">
                      <img src="assets/image/slider-2.png" className="img-fluid" alt='carrier-slider' />
                    </div>
                    <div className="text-center">
                      <img src="assets/image/slider-1.png" className="img-fluid" alt='carrier-slider' />
                    </div>
                    <div className="text-center">
                      <img src="assets/image/slider-2.png" className="img-fluid" alt='carrier-slider' />
                    </div>
                    <div className="text-center">
                      <img src="assets/image/slider-1.png" className="img-fluid" alt='carrier-slider' />
                    </div>
                    <div className="text-center">
                      <img src="assets/image/slider-2.png" className="img-fluid" alt='carrier-slider' />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="carrier-inner">
                <h1><span> Compétences </span>  variées dans  
                  le domaine de  <span> l'investissement </span>  immobilier</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="carrier-inner">
                <p>La diversité des profils au sein de notre équipe constitue un atout essentiel qui nous permet de concevoir et mettre en œuvre des stratégies robustes. Nous gérons l'intégralité de la chaîne de valeur de l'investissement immobilier, depuis la structuration des fonds jusqu'à la gestion des biens présents au sein de nos portefeuilles.</p>
                <p>En optant pour une carrière chez Beatimo, tu intègres une équipe déterminée à contribuer au succès des entreprises régionales. Ton engagement a un impact concret sur leur développement, en exploitant pleinement ton potentiel. Rejoindre Beatimo, c'est non seulement être partie prenante des réussites locales, mais aussi participer activement à l'épanouissement et à la croissance des entreprises régionales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default CarrierSlider;
