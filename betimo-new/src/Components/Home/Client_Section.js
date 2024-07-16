import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const ClientSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalItems = 2;

  const settings = {
    autoplay: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <svg
        width="100px"
        height="100px"
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.502115"
          y="0.502115"
          width="59.1545"
          height="59.1545"
          rx="29.5773"
          stroke="#FFFAE6"
          strokeWidth="1.00423"
        />
        <path
          d="M34.5635 31.1527H21.4844V29.0042H34.5635L28.5477 22.9883L30.0785 21.4844L38.6726 30.0785L30.0785 38.6726L28.5477 37.1686L34.5635 31.1527Z"
          fill="#FFFAE6"
        />
      </svg>
    ),
    prevArrow: (
      <svg
        width="61"
        height="61"
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="59.6541"
          y="59.6541"
          width="59.1545"
          height="59.1545"
          rx="29.5773"
          transform="rotate(-180 59.6541 59.6541)"
          stroke="#FFFAE6"
          strokeWidth="1.00423"
        />
        <path
          d="M25.5927 29.0035H38.6719V31.152H25.5927L31.6086 37.1679L30.0778 38.6719L21.4837 30.0778L30.0778 21.4837L31.6086 22.9876L25.5927 29.0035Z"
          fill="#FFFAE6"
        />
      </svg>
    ),
    afterChange: (current) => setCurrentIndex(current + 1),
  };

  return (
    <>
    <section className="clients-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            {/*  slider  */}
            <div className="h-100">
              <div className="owl-slider">
                <Slider {...settings}>
                  <div className="item">
                    <div className="row slider-content-top align-items-center">
                      <div className="col-md-6">
                        <div className="slider-content">
                          <h5>
                            <img
                              src="assets/image/nos-services-icon.png"
                              alt="Client-Section"
                            />{" "}
                            ce que disent nos clients
                          </h5>
                          <h1>
                            En cinq ans, j'ai acquis 4 <span> immeubles, </span>{" "}
                            40 logements, d'une
                            <span> valeur de 3.6M. </span>
                            <br />
                            <br />L<span>’expérience</span> de Beatimo a été
                            précieuse.”
                          </h1>
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <img
                          src="assets/image/slider-image.png"
                          className="w-100 h-100vh"
                          alt="1000X1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row slider-content-top align-items-center">
                      <div className="col-md-6">
                        <div className="slider-content">
                          <h5>
                            <img
                              src="assets/image/nos-services-icon.png"
                              alt="Client-Section"
                            />{" "}
                            ce que disent nos clients
                          </h5>
                          <h1>
                            En cinq ans, j'ai acquis 4 <span> immeubles, </span>{" "}
                            40 logements, d'une
                            <span> valeur de 3.6M. </span>
                            <br />
                            <br />L<span>’expérience</span> de Beatimo a été
                            précieuse. ”
                          </h1>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <img
                          src="./assets/image/slider-image.png"
                          className="w-100 h-100vh"
                          alt="1000X1000"
                        />
                      </div>
                    </div>
                  </div>
                </Slider>
                <div className="col-lg-6 counter-div">
                  <div className="position-relative">
                    <div className="counter" id="counter">
                      {currentIndex} / {totalItems}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="propos-section">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-5">
        <div className="propos-image">
          <img src="assets/image/propos-image.png" className="img-fluid" alt="Client-section-img" />
        </div>
      </div>
      
      <div className="col-lg-7">
      <Link to="/propos">
        <div className="propos-content">
          <h5><img src="assets/image/nos-services-icon.png" alt="Client-section-img" /> à propos de beatimo</h5>
          <h1>Maximisez la <br /> <span> Performance </span>
            de <br /> Vos Investissements</h1>
          <div className="propos-content-bottom">
            <p>Grâce à une approche personnalisée et une analyse actuarielle approfondie, nous vous guidons dans la prise de décisions éclairées pour atteindre vos objectifs financiers. Que vous soyez un investisseur novice ou expérimenté, nous sommes là pour vous aider à naviguer dans le marché immobilier avec confiance et succès. </p>
            <div className="propos-button">
              <button>découvrir beatimo</button>
              <img src="assets/image/arrow_right.png" alt="Client-section-img" />
            </div>
          </div>
        </div>
      </Link>
      </div>
      <div className="col-lg-12">
        <div className="savoir-content">
          <h5><img src="assets/image/nos-services-icon.png" alt="Client-section-img" /> nous joindre</h5>
          <h1><span>Curieux</span> de savoir  <br />
            ce que nous pouvons <br /> faire pour <span>vous?</span></h1>
          <div className="savoir-button">
            <button onClick={() => window.openNavForm()}>entrer en contact</button>
            <img src="assets/image/arrow_right.png" alt="Client-section-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
</>
  );
};

export default ClientSection;
