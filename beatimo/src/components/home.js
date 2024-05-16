import React, { useEffect, useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as CrErDeLaValeur } from "../components/assests/home/--cr-er-de-la-valeur.svg";
import { ReactComponent as Frame11 } from "../components/assests/home/frame-11.svg";
import { ReactComponent as Frame40916 } from "../components/assests/home/frame-40916.svg"; 
import { ReactComponent as Frame48095856 } from "../components/assests/home/frame-48095856.svg";
import { ReactComponent as Frame48095965 } from "../components/assests/home/frame-48095965.svg";
import { ReactComponent as Frame48095967 } from "../components/assests/home/frame-48095967.svg";
import { ReactComponent as Frame48095972 } from "../components/assests/home/frame-48095972.svg";
import { ReactComponent as Frame48095976 } from "../components/assests/home/frame-48095976.svg";
import { ReactComponent as Frame48095977 } from "../components/assests/home/frame-48095977.svg";
import { ReactComponent as Frame48095978 } from "../components/assests/home/frame-48095978.svg";
import { ReactComponent as IconComponentNode } from "../components/assests/home/frame-48095978-2.svg"
import { ReactComponent as Intersect } from "../components/assests/home/intersect.svg";
import { ReactComponent as Line13 } from "../components/assests/home/line-13.svg";
import { ReactComponent as Line24 } from "../components/assests/home/line-24.svg";
import { ReactComponent as Line26 } from "../components/assests/home/line-26.svg";
import { ReactComponent as Line7 } from "../components/assests/home/line-7.svg";
import { ReactComponent as NamecandidateNameFrame11Score101 } from "../components/assests/home/frame-11.svg"
import { ReactComponent as NamecandidateNameVectorScore101 } from "../components/assests/home/frame-11.svg"
import {ReactComponent as Vector} from "../components/assests/home/vector-1.svg";
import "./style.css";
import rectangleImage from '../components/assests/rectangle-1052.png';
import groupImage from '../components/assests/group-40941.png';
import aboutusImage from '../components/assests/home/about-us-2560x1706-1.png';
import groupImage41210 from "../components/assests/home/group-41210.png";
import groupImage40897 from "../components/assests/home/group-40897.png";
import rectangle991 from "../components/assests/home/rectangle-991.png";
import vectorimage from "../components/assests/home/vector.png";
import group41225 from "../components/assests/home/group-41225.png";
import OverlayServices from './OverlayServices'; // Adjust path as necessary

export const Home = () => {
  
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Toggle the sidebar's visibility
  const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
  };

  // Close the sidebar if clicked outside
  const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          setSidebarOpen(false);
      }
  };

  // Add event listeners for detecting clicks outside the sidebar
  useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []); // Empty dependency array ensures this effect only runs on mount and unmount

    const navigate = useNavigate();
  
  const frame13Ref = useRef(null);  // Ref for the div you want to scroll to

  const handleScrollToFrame13 = () => {
    if (frame13Ref.current) {
      const topPosition = frame13Ref.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topPosition,  // This positions the target element at the top of the viewport
        behavior: 'smooth'
      });
    }
  };

  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const imageRef = useRef(null);
  const lastCardRef = useRef(null);
  const aboutUsRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        const imagePos = imageRef.current ? imageRef.current.offsetTop + imageRef.current.offsetHeight : 0;
        const lastCardPos = lastCardRef.current ? lastCardRef.current.offsetTop : 0;

        if (scrollPos > imagePos && scrollPos < lastCardPos) {
            const moveDistance = scrollPos - imagePos;
            if (cardRef1.current) {
                cardRef1.current.style.transform = `translateY(-${moveDistance}px)`;
            }
            if (cardRef2.current) {
                cardRef2.current.style.transform = `translateY(-${moveDistance}px)`;
            }
            if (cardRef3.current) {
                cardRef3.current.style.transform = `translateY(-${moveDistance}px)`;
            }
        } else {
            if (cardRef1.current) {
                cardRef1.current.style.transform = 'translateY(0)';
            }
            if (cardRef2.current) {
                cardRef2.current.style.transform = 'translateY(0)';
            }
            if (cardRef3.current) {
                cardRef3.current.style.transform = 'translateY(0)';
            }
        }
    });
}, []);
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY >= 1200 && window.scrollY <= 4000) {
      aboutUsRef.current.style.position = 'fixed';
      aboutUsRef.current.style.top = '0px';
      aboutUsRef.current.style.width = '1442px';
    } else {
      aboutUsRef.current.style.position = 'fixed';
      aboutUsRef.current.style.top = '1920px';
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div className="home">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <img className="img" alt="Rectangle" src={rectangleImage} />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="group-2">
            <div className="frame">
              <div className="-groupoverlap-wrapper">
                <div className="overlap-group">
                  <p className="heading-example">
                    Beatimo excelle en actuariat, cumulant des années d&#39;expérience. Nos conseils sur mesure,
                    résultat d&#39;une expertise approfondie, optimisent la gestion des risques, <br />
                    la tarification des assurances et la planification financière.
                  </p>
                  <div className="group-3" />
                </div>
              </div>
              <p className="text-wrapper">
                Bénéficiez d&#39;une approche proactive assurant stabilité et rendements optimaux. Choisissez Beatimo
                pour une expertise actuarielle d&#39;élite.
              </p>
              <div className="frame-wrapper">
                <div className="frame-2">
                  <div className="div-wrapper">
                    <div className="frame-3">
                      <div className="text-wrapper-2">DÉCOUVRIR NOS SERVICES</div>
                    </div>
                  </div>
                  <Frame11 className="frame-11" onClick={handleScrollToFrame13} />
                </div>
              </div>
            </div>
            <div className="frame-4">
              <div className="l-immobilier-c-est-wrapper">
                <p className="l-immobilier-c-est">
                  <span className="span">
                    L&#39;immobilier,
                    <br />
                    c’est{" "}
                  </span>
                  <span className="text-wrapper-3">bien plus </span>
                  <span className="span">qu’un simple </span>
                  <span className="text-wrapper-3">investissement</span>
                  <span className="text-wrapper-4">&nbsp;</span>
                  <span className="span">financier.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="about-us-wrapper" ref={aboutUsRef}>
          <img className="about-us" src={aboutusImage} alt="About Us" />
        </div>
          <p className="inspirons-les-gens">
            <span className="text-wrapper-5">
              Inspirons <br />
              les gens
            </span>
          </p>
          <CrErDeLaValeur className="crerde-la-valeur" />
          <div className="group-4" ref={cardRef1}>
            <div className="frame-5">
              <div className="frame-6">
                <div className="frame-7">
                  <Line13 className="line" />
                  <div className="heading-example-2">Performante</div>
                </div>
                <Frame48095967 className="frame-8" />
                <div className="group-5">
                  <p className="p">
                    Nous valorisons la possibilité d&#39;investir, de contribuer à notre communauté et de nous
                    concentrer sur ce qui compte vraiment pour nous. Cela s&#39;atteint grâce à des stratégies orientés
                    vers la performance.
                  </p>
                  <Line13 className="line-13" />
                </div>
              </div>
            </div>
          </div>
          <div className="group-6" ref={cardRef2}>
            <div className="frame-5">
              <div className="frame-6">
                <div className="frame-7">
                  <Line13 className="line" />
                  <div className="heading-example-2">Empathique</div>
                </div>
                <div className="intersect-wrapper">
                  <Intersect className="intersect-instance" />
                </div>
                <div className="group-5">
                  <p className="p">
                    Nous partageons les mêmes rêves que nos clients. Nous comprenons leur réalité et appliquons les
                    mêmes outils et principes que nous proposons, assurant ainsi une expérience enrichissante.
                  </p>
                  <Line13 className="line-13" />
                </div>
              </div>
            </div>
          </div>
          <div className="group-7" ref={cardRef3}>
            <div className="frame-5">
              <div className="frame-6">
                <div className="frame-7">
                  <Line13 className="line" />
                  <div className="heading-example-2">Experte</div>
                </div>
                <img className="group-8" alt="Group" src={groupImage40897} />
                <div className="group-9">
                  <p className="heading-example-3">
                    Notre expertise se forge sur le terrain, allant au-delà des formations. Les projets complexes ont
                    affiné notre approche. Notre équipe, composée d&#39;actuaires et <br />
                    de passionnés, offre un accompagnement <br />
                    direct et transparent.
                  </p>
                  <Line13 className="line-13-instance" />
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-4" ref={lastCardRef}/>
          <div className="frame-9">
            <div className="frame-10">
              <div className="group-10">
                <div className="frame-12">
                  <Vector className="vector-instance" color="#EEFFF6" />
                  <div className="heading-example-4">NOS SERVICES</div>
                </div>
              </div>
              <p className="une-expertise">
                <span className="span">Une </span>
                <span className="text-wrapper-3">expertise </span>
                <span className="span">approfondie en investissement </span>
                <span className="text-wrapper-3">
                  immobilier.
                  <br />
                </span>
              </p>
            </div>
          </div>
          <div className="frame-13" ref={frame13Ref}>
            <Line7 className="line-7" />
            <div className="frame-14">
              <div className="frame-15">
                <div className="text-wrapper-6">01</div>
                <div className="text-wrapper-7">Analyse de projets</div>
              </div>
              <Frame48095972 className="frame-8" onClick={toggleSidebar} />
              <div className="home">
            <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                {isSidebarOpen && <OverlayServices />}
            </div>
        </div>
            </div>
            <Line7 className="line-5" />
            <div className="frame-14">
              <div className="frame-15">
                <div className="text-wrapper-6">02</div>
                <div className="text-wrapper-8">Planification stratégique</div>
              </div>
              <Frame48095972 className="frame-8" onClick={toggleSidebar}/>
              <div className="home">
            <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                {isSidebarOpen && <OverlayServices />}
            </div>
        </div>
            </div>
            <Line7 className="line-5" />
            <div className="frame-14">
              <div className="frame-15">
                <div className="text-wrapper-6">03</div>
                <div className="text-wrapper-8">Performance portefeuille</div>
              </div>
              <Frame48095972 className="frame-8" onClick={toggleSidebar}/>
              <div className="home">
            <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                {isSidebarOpen && <OverlayServices />}
            </div>
        </div>
            </div>
            <Line7 className="line-5" />
            <div className="frame-14">
              <div className="frame-15">
                <div className="text-wrapper-6">04</div>
                <div className="text-wrapper-8">Structure partenariats</div>
              </div>
              <Frame48095972 className="frame-8" onClick={toggleSidebar}/>
              <div className="home">
            <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                {isSidebarOpen && <OverlayServices />}
            </div>
        </div>
            </div>
            <Line7 className="line-5" />
            <div className="frame-14">
              <div className="frame-15">
                <div className="text-wrapper-6">05</div>
                <div className="text-wrapper-8">Rapport aux investisseurs</div>
              </div>
              <Frame48095972 className="frame-8" onClick={toggleSidebar}/>
              <div className="home">
            <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                {isSidebarOpen && <OverlayServices />}
            </div>
        </div>
            </div>
            <Line7 className="line-5" />
            <div className="frame-14">
              <div className="frame-15">
                <div className="text-wrapper-6">06</div>
                <div className="text-wrapper-8">Planification de retraite</div>
              </div>
              <Frame48095972 className="frame-8" onClick={toggleSidebar}/>
              <div className="home">
            <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                {isSidebarOpen && <OverlayServices />}
            </div>
        </div>
            </div>
            <Line7 className="line-5" />
            <div className="frame-14">
              <div className="frame-15">
                <div className="text-wrapper-6">07</div>
                <div className="text-wrapper-8">Mentorat</div>
              </div>
              <Frame48095972 className="frame-8" onClick={toggleSidebar}/>
              <div className="home">
            <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                {isSidebarOpen && <OverlayServices />}
            </div>
        </div>
            </div>
            <Line7 className="line-5" />
          </div>
          <div className="rectangle-5" />
          <div className="group-wrapper">
            <div className="group-11">
              <Line24 className="line-24" />
              <div className="frame-16">
                <div className="frame-17">
                  <p className="text-wrapper-9">COPYRIGHT © 2024 BEATIMO | TOUT DROITS RÉSERVÉS</p>
                  <div className="text-wrapper-9">PRÉFÉRENCE DES TÉMOINS</div>
                  <div className="text-wrapper-9">POLITIQUES ET CONFIDENTIALITÉ</div>
                </div>
                <p className="site-par-les-mauvais">SITE PAR LES MAUVAIS GARÇONS</p>
              </div>
              <img className="group-12" alt="Group" src={groupImage41210} />
              <div className="group-13">
                <Line26 className="line-26" />
                <Line26 className="line-30" />
                <Line26 className="line-29" />
                <div className="overlap-group-2">
                  <div className="text-wrapper-10">01</div>
                  <div className="text-wrapper-11">Facebook</div>
                </div>
                <div className="overlap-2">
                  <div className="text-wrapper-12">03</div>
                  <div className="text-wrapper-13">LinkedIn</div>
                </div>
                <Line26 className="line-25" />
                <div className="overlap-3">
                  <div className="text-wrapper-14">02</div>
                  <div className="text-wrapper-13">Youtube</div>
                </div>
                <div className="overlap-4">
                  <div className="text-wrapper-14">04</div>
                  <div className="text-wrapper-13">Tiktok</div>
                </div>
                <div className="group-14">
                  <div className="frame-12">
                    <Vector className="vector-instance" color="#FFFAE6" />
                    <div className="heading-example-5">NOS RÉSEAUX SOCIAUX</div>
                  </div>
                </div>
                <Frame48095976 className="frame-48095976" />
                <Frame48095977 className="frame-48095977" />
                <Frame48095978 className="frame-48095978" />
                <IconComponentNode className="frame-11-instance" />
              </div>
            </div>
          </div>
          <div className="group-15">
            <p className="maximisez-la">
              <span className="span">Maximisez la </span>
              <span className="text-wrapper-3">Performance de Vos Investissements</span>
             
            </p>
            <div className="frame-18">
              <p className="heading-example-6">
                Grâce à une approche personnalisée et une analyse actuarielle approfondie, nous vous guidons dans la
                prise de décisions éclairées pour atteindre vos objectifs financiers. Que vous soyez un investisseur
                novice ou expérimenté, nous sommes là pour vous aider à naviguer dans le marché immobilier avec
                confiance et succès.
              </p>
              <div className="frame-wrapper">
                <div className="frame-2">
                  <div className="frame-19">
                    <div className="frame-3">
                      <div className="text-wrapper-2">DÉCOUVRIR BEATIMO</div>
                    </div>
                  </div>
                  <NamecandidateNameFrame11Score101 className="frame-11" />
                </div>
              </div>
            </div>
            <div className="frame-20">
              <Vector className="vector-instance" color="#EEFFF6" />
              <div className="heading-example-4">À PROPOS DE BEATIMO</div>
            </div>
          </div>
          <img className="vector-2" alt="Vector" src={vectorimage} />
          <div className="frame-21">
            <div className="frame-8" />
          </div>
          <div className="rectangle-6" />
          <img className="rectangle-7" alt="Rectangle" src={rectangle991} />
          <div className="frame-22">
            <div className="frame-23">
              <NamecandidateNameVectorScore101 className="icon-instance-node" />
              <p className="heading-example-7">CE QUE DISENT NOS CLIENTS</p>
            </div>
            <p className="en-cinq-ans-j-ai">
              <span className="text-wrapper-15">“ En cinq ans, j&#39;ai acquis </span>
              <span className="text-wrapper-16">4 immeubles</span>
              <span className="text-wrapper-15">,</span>
              <span className="text-wrapper-15">
                {" "}
                40 logements, d&#39;une <br />
              </span>
              <span className="text-wrapper-16">valeur de 3.6M</span>
              <span className="text-wrapper-15">
                . <br />
                <br />
              </span>
              <span className="text-wrapper-16">L’expérience</span>
              <span className="text-wrapper-15"> de Beatimo a été précieuse. ”</span>
            </p>
            <div className="frame-24">
              <Frame40916 className="frame-8" />
              <div className="frame-25">
                <div className="text-wrapper-17">01</div>
                <div className="frame-26">
                  <div className="frame-27">
                    <div className="text-wrapper-17">/</div>
                  </div>
                </div>
                <div className="text-wrapper-17">04</div>
              </div>
            </div>
          </div>
          <div className="rectangle-8" />
          <div className="frame-28">
            <div className="frame-29">
              <div className="frame-30">
                <Vector className="vector-instance" color="#EEFFF6" />
                <div className="heading-example-4">NOUS JOINDRE</div>
              </div>
              <p className="heading">
                <span className="text-wrapper-3">Curieux</span>
                <span className="text-wrapper-18">
                  {" "}
                  de savoir <br />
                  ce que nous pouvons faire pour{" "}
                </span>
                <span className="text-wrapper-3">vous?</span>
              </p>
            </div>
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="frame-19">
                  <div className="frame-3">
                    <div className="text-wrapper-2">ENTRER EN CONTACT</div>
                  </div>
                </div>
                <NamecandidateNameFrame11Score101 className="frame-11" onClick={() => navigate('/about')}/>
              </div>
            </div>
          </div>
          <div className="frame-31" >
            <Frame48095965 className="frame-8" onClick={() => navigate('/')} />
            <div className="frame-32">
              <div className="navbar">
              <div className="text-wrapper-19" onClick={handleScrollToFrame13}>SERVICES</div>
              <div className="text-wrapper-19" onClick={() => navigate('/about')}>
            À PROPOS
        </div>
          <div className="text-wrapper-19" onClick={() => navigate('/Career')}>CARRIÈRE</div>
                <div className="text-wrapper-19">RÉSEAUX SOCIAUX</div>
                <div className="text-wrapper-19">EN</div>
              </div>
              <img className="group-16" alt="Group" src={group41225} />
            </div>
          </div>
        </div>
        <div className="overlap-5">
          <Frame48095856 className="frame-48095856" />
          <Frame48095856 className="frame-48095856" />
          <Frame48095856 className="frame-48095856" />
          <Frame48095856 className="frame-48095856" />
          <Frame48095856 className="frame-48095856" />
          <Frame48095856 className="frame-48095856" />
        </div>
      </div>
    </div>
  );
};
export default Home;