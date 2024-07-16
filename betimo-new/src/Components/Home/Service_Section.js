import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
  useEffect(() => {
    const openNav = () => {
      const sidenav = document.getElementById("mySidenav");
      sidenav.style.width = "50%";
      sidenav.classList.add("open");
      sidenav.style.padding = "30px";
    };

    const closeNav = () => {
      const sidenav = document.getElementById("mySidenav");
      sidenav.style.width = "0";
      sidenav.style.padding = "0px";
      sidenav.classList.remove("open");
    };
    window.openNav = openNav;
    window.closeNav = closeNav;

    const playButton = document.getElementById('playButton');
    const video = document.getElementById('myVideo');

    const handlePlayButtonClick = () => {
      video.play();
      playButton.style.display = 'none';
    };

    const handleVideoPause = () => {
      playButton.style.display = 'block';
    };

    playButton.addEventListener('click', handlePlayButtonClick);
    video.addEventListener('pause', handleVideoPause);

    // Cleanup event listeners on component unmount
    return () => {
      playButton.removeEventListener('click', handlePlayButtonClick);
      video.removeEventListener('pause', handleVideoPause);
    };


  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const stickySection = document.getElementById('sticky-section');
      const sectionWrapper = stickySection.closest('.nos-services-section');
      const clientsSection = document.querySelector('.clients-section');

      if (!sectionWrapper || !stickySection || !clientsSection) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const sectionRect = sectionWrapper.getBoundingClientRect();
      const clientsRect = clientsSection.getBoundingClientRect();

      const sectionTop = sectionRect.top + window.scrollY;
      const clientsTop = clientsRect.top + window.scrollY;
      const clientsBottom = clientsTop + clientsSection.offsetHeight;
      const viewportHeight = window.innerHeight;

      if (scrollY >= sectionTop && scrollY < clientsBottom - viewportHeight) {
        stickySection.classList.add('is-sticky');
      } else {
        stickySection.classList.remove('is-sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <>
      <section className="nos-services-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="nos-services-left" id="sticky-section">
                <h5><img src="assets/image/nos-services-icon.png" alt="service-section-img" /> Nos services</h5>
                <h1>Une <span> expertise </span> approfondie en investissement <span> immobilier. </span></h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="nos-services-right">
                <ul>
                  {['Analyse de projets', 'Planification stratégique', 'Performance portefeuille', 'Structure partenariats', 'Rapport aux investisseurs', 'Planification de retraite', 'Mentorat'].map((service, index) => (
                    <li key={index} onClick={() => window.openNav()}>
                      <div><span>{`0${index + 1}`}</span> <p>{service}</p></div> <img src="assets/image/arrow_right.png" alt="service-section-img" />
                    </li>
                  ))}
                </ul>
              </div>
              {/* form */}

            </div>
          </div>
        </div>
      </section>
      <div id="mySidenav" className="sidenav">
        <Link to={{ javascript: void (0) }} className="closebtn" onClick={() => window.closeNav()}>
          <svg width={47} height={47} viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x={46} y={46} width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46)" fill="#007367" />
            <rect x={46} y={46} width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46)" stroke="#007367" />
            <path d="M19.2807 28.2057L18.2891 27.2141L22.2557 23.2474L18.2891 19.2807L19.2807 18.2891L23.2474 22.2557L27.2141 18.2891L28.2057 19.2807L24.2391 23.2474L28.2057 27.2141L27.2141 28.2057L23.2474 24.2391L19.2807 28.2057Z" fill="white" />
          </svg>
        </Link>
        <div className="sidebar-top">
          <h1>Planification <br />
            <span>stratégique</span></h1>
        </div>
        <div className="sidebar-inner">
          <h5>
            <svg width={16} height={13} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Vector" d="M9.91451 12.4138H0.55399C0.2539 12.4138 0 12.1714 0 11.8598V0.710264C0 0.410174 0.242358 0.15625 0.55399 0.15625H9.91451C10.0646 0.15625 10.2031 0.213961 10.3069 0.317839L15.8355 5.84642C16.0548 6.06572 16.0548 6.41198 15.8355 6.61973L10.3069 12.2407C10.2031 12.3445 10.0646 12.4022 9.91451 12.4022V12.4138Z" fill="#007367" />
            </svg>
            Description
          </h5>
          <p>La planification stratégique financière est un service essentiel offert par notre cabinet de finance, visant à aider nos clients à atteindre leurs objectifs financiers à long terme de manière efficace et durable. </p>
          <p>En combinant une analyse approfondie des finances personnelles ou d'entreprise avec une vision stratégique, nous élaborons des stratégies sur mesure pour optimiser la gestion des ressources financières et maximiser les rendements.</p>
          <div className="side-bar-video">
            <video id="myVideo" controls>
              <source src="assets/video/side-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button id="playButton">
              <svg width={60} height={61} viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_4890_1219)">
                  <circle cx={30} cy="30.2812" r={30} fill="white" fillOpacity="0.7" />
                </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M36.8457 29.7554C37.4394 30.1513 37.4394 31.0237 36.8457 31.4195L27.0485 37.951C26.3839 38.3941 25.4937 37.9177 25.4937 37.119L25.4937 24.056C25.4937 23.2573 26.3839 22.7809 27.0484 23.224L36.8457 29.7554Z" fill="#007367" />
                <defs>
                  <filter id="filter0_b_4890_1219" x={-20} y="-19.7188" width={100} height={100} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4890_1219" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4890_1219" result="shape" />
                  </filter>
                </defs>
              </svg>
            </button>
          </div>
          <div className="sidebar-bottom">
            <h5>
              <svg width={16} height={13} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector" d="M9.91451 12.4138H0.55399C0.2539 12.4138 0 12.1714 0 11.8598V0.710264C0 0.410174 0.242358 0.15625 0.55399 0.15625H9.91451C10.0646 0.15625 10.2031 0.213961 10.3069 0.317839L15.8355 5.84642C16.0548 6.06572 16.0548 6.41198 15.8355 6.61973L10.3069 12.2407C10.2031 12.3445 10.0646 12.4022 9.91451 12.4022V12.4138Z" fill="#007367" />
              </svg>
              Avantages
            </h5>
            <h1>Maximisation des rendements</h1>
            <p>Identification des opportunités d'investissement et de croissance pour optimiser les rendements financiers</p>
            <h1>Gestion des risques</h1>
            <p>Élaboration de stratégies de gestion des risques pour protéger les actifs et minimiser les pertes potentielles</p>
          </div>
          <div className="sidebar-bottom">
            <h5>
              <svg width={16} height={13} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector" d="M9.91451 12.4138H0.55399C0.2539 12.4138 0 12.1714 0 11.8598V0.710264C0 0.410174 0.242358 0.15625 0.55399 0.15625H9.91451C10.0646 0.15625 10.2031 0.213961 10.3069 0.317839L15.8355 5.84642C16.0548 6.06572 16.0548 6.41198 15.8355 6.61973L10.3069 12.2407C10.2031 12.3445 10.0646 12.4022 9.91451 12.4022V12.4138Z" fill="#007367" />
              </svg>
              Processus
            </h5>
            <h1>Analyse financière approfondie</h1>
            <p>Évaluation des états financiers, des flux de trésorerie et des besoins en capitaux pour comprendre la situation actuelle</p>
            <h1>Élaboration de stratégies personnalisées</h1>
            <p>Développement de plans financiers sur mesure en fonction des objectifs spécifiques du client et de son appétence au risque</p>
          </div>
        </div>
      </div>
    </>

  );
};

export default ServiceSection;
