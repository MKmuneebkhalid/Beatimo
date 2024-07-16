import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
const ValeurSection = () => {
  useEffect(()=>{
    const openNavValeur =()=> {
      var sidenav = document.getElementById("SidenavValeur");
      sidenav.style.width = "60%";
      sidenav.classList.add("open");
      }

      const closeNavValeur =()=> {
      var sidenav = document.getElementById("SidenavValeur");
      sidenav.style.width = "0";
      sidenav.classList.remove("open");
      }
      window.openNavValeur = openNavValeur;
      window.closeNavValeur = closeNavValeur;
  },[])
  return (
    <>
      <section className="valeur-section">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-5">
        <div className="valeur-content">
          <h5><img src="assets/image/nos-services-icon.png" alt="Valeur-Section-Img" /> Passionnée</h5>
          <h1>Créateurs <br />
            de valeur <br /><span> immobilière </span></h1>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="valeur-image">
          <Link onClick={()=>window.openNavValeur()}>
            <img src="assets/image/Rectangle-4.png" className="img-fluid" alt="Valeur-Section-Img" />
            <div className="valeur-image-content">
              <div>
                <h4>Philippe Foisy</h4>
                <p>Président et fondateur</p>
              </div>
              <img src="assets/image/arrow_right.png" alt="Valeur-Section-Img" />
            </div>
          </Link>
        </div>
        <div className="valeur-image">
          <Link onClick={()=>window.openNavValeur()}>
            <img src="assets/image/Rectangle-4.png" className="img-fluid" alt="Valeur-Section-Img" />
            <div className="valeur-image-content">
              <div>
                <h4>Philippe Foisy</h4>
                <p>Président et fondateur</p>
              </div>
              <img src="assets/image/arrow_right.png" alt="Valeur-Section-Img" />
            </div>
          </Link>
        </div>
        <div className="valeur-image">
          <Link onClick={()=>window.openNavValeur()}>
            <img src="assets/image/Rectangle-4.png" className="img-fluid" alt="Valeur-Section-Img" />
            <div className="valeur-image-content">
              <div>
                <h4>Philippe Foisy</h4>
                <p>Président et fondateur</p>
              </div>
              <img src="assets/image/arrow_right.png" alt="Valeur-Section-Img" />
            </div>
          </Link>
        </div>
        <div className="valeur-image">
          <Link onClick={()=>window.openNavValeur()}>
            <img src="assets/image/Rectangle-4.png" className="img-fluid" alt="Valeur-Section-Img" />
            <div className="valeur-image-content">
              <div>
                <h4>Philippe Foisy</h4>
                <p>Président et fondateur</p>
              </div>
              <img src="assets/image/arrow_right.png" alt="Valeur-Section-Img" />
            </div>
          </Link>
        </div>
        <div className="valeur-image">
          <Link onClick={()=>window.openNavValeur()}>
            <img src="assets/image/Rectangle-4.png" className="img-fluid" alt="Valeur-Section-Img" />
            <div className="valeur-image-content">
              <div>
                <h4>Philippe Foisy</h4>
                <p>Président et fondateur</p>
              </div>
              <img src="assets/image/arrow_right.png" alt="Valeur-Section-Img" />
            </div>
          </Link>
        </div>
        <div className="valeur-image">
          <Link onClick={()=>window.openNavValeur()}>
            <img src="assets/image/Rectangle-4.png" className="img-fluid" alt="Valeur-Section-Img" />
            <div className="valeur-image-content">
              <div>
                <h4>Philippe Foisy</h4>
                <p>Président et fondateur</p>
              </div>
              <img src="assets/image/arrow_right.png" alt="Valeur-Section-Img" />
            </div>
          </Link>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="Nous-content">
          <h5><img src="assets/image/nos-services-icon.png" alt="Valeur-Section-Img" /> carrière</h5>
          <h1>Nous <span> sommes </span> toujours à <br /> la recherche de <span> talents.</span> <br /> Êtes-vous <span> partant ? </span></h1>
          <div className="Nous-button">
          <Link to="/carrier">
            <button className="Nous-btn">découvrir nos postes </button>
            <img className='ps-2' src="assets/image/arrow_right.png" alt="Valeur-Section-Img" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div id="SidenavValeur" className="sidenav">
  <Link to={{javascript:void(0)}} className="closebtn" onClick={()=>window.closeNavValeur()}>
    <svg width={47} height={47} viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x={46} y={46} width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46)" fill="white" />
      <rect x={46} y={46} width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46)" stroke="white" />
      <path d="M19.2807 28.2057L18.2891 27.2141L22.2557 23.2474L18.2891 19.2807L19.2807 18.2891L23.2474 22.2557L27.2141 18.2891L28.2057 19.2807L24.2391 23.2474L28.2057 27.2141L27.2141 28.2057L23.2474 24.2391L19.2807 28.2057Z" fill="#007367" />
    </svg>
  </Link>
  <div className="foisy-sidebar">
    <div className="foisy-sidebar-img">
      <img src="assets/image/Rectangle-5.png" className="img-fluid" alt="Valeur-Section-Img" />
    </div>
    <div className="foisy-sidebar-content">
      <div className="foisy-sidebar-heading">
        <p>Président &amp; Fondateur&nbsp;</p>
        <h1>Philippe Foisy</h1>
        <h5>F.S.A, F.I.C.A</h5>
      </div>
      <div className="foisy-sidebar-content-inner">
        <h5>
          <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.91451 13.1325H0.55399C0.2539 13.1325 0 12.8902 0 12.5785V1.42901C0 1.12892 0.242358 0.875 0.55399 0.875H9.91451C10.0646 0.875 10.2031 0.932711 10.3069 1.03659L15.8355 6.56517C16.0548 6.78447 16.0548 7.13073 15.8355 7.33848L10.3069 12.9594C10.2031 13.0633 10.0646 13.121 9.91451 13.121V13.1325Z" fill="#007367" />
          </svg>
          BIOGRAPHIE
        </h5>
        <h6>Philippe Foisy incarne l'excellence dans le monde de l'immobilier, cumulant les titres de Président &amp; Fondateur de Beatimo. Fort d'une expérience de plus de 15 ans, il a acquis une expertise pointue dans tous les aspects de l'investissement immobilier et de la création de valeur. Sa carrière remarquable lui a permis de tisser un réseau solide de relations avec des partenaires stratégiques et des investisseurs de renom.</h6>
        <h6>Diplômé expert immobilier, avec une spécialisation en gestion d'actifs, Philippe Foisy a fait ses preuves au sein de grandes sociétés de gestion de fonds, affinant son savoir-faire et consolidant sa réputation. En tant qu'entrepreneur chevronné, il apporte à Beatimo une direction stratégique, guidée par l'innovation et une connaissance approfondie du marché immobilier, afin de créer des opportunités d'investissement exceptionnelles et de maximiser les rendements pour ses clients et partenaires.</h6>
      </div>
      <div className="foisy-sidebar-content-inner">
        <h5>
          <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.91451 13.1325H0.55399C0.2539 13.1325 0 12.8902 0 12.5785V1.42901C0 1.12892 0.242358 0.875 0.55399 0.875H9.91451C10.0646 0.875 10.2031 0.932711 10.3069 1.03659L15.8355 6.56517C16.0548 6.78447 16.0548 7.13073 15.8355 7.33848L10.3069 12.9594C10.2031 13.0633 10.0646 13.121 9.91451 13.121V13.1325Z" fill="#007367" />
          </svg>
          Expertise Immobilière
        </h5>
        <h1>Investissement immobilier</h1>
        <p>Maîtrise des différentes stratégies d'investissement dans l'immobilier résidentiel, commercial et industriel, visant à optimiser les rendements et à réduire les risques pour les investisseurs.</p>
        <h1>Création de valeur</h1>
        <p>Capacité à identifier et à exploiter les opportunités de création de valeur en optimisant les actifs immobiliers par le biais de rénovations, de développements ou de réaménagements stratégiques.</p>
        <h1>Gestion d'actifs</h1>
        <p>Expertise en gestion proactive des actifs immobiliers, incluant la maximisation des revenus locatifs, la minimisation des coûts d'exploitation et la préservation à long terme de la valeur des actifs.</p>
        <h1>Réseau étendu</h1>
        <p>Recommandations personnalisées sur les opportunités d'investissement les plus adaptées aux objectifs financiers, au profil de risque et aux contraintes de liquidité du client.</p>
      </div>
      <div className="foisy-sidebar-content-inner">
        <h5>
          <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.91451 13.1325H0.55399C0.2539 13.1325 0 12.8902 0 12.5785V1.42901C0 1.12892 0.242358 0.875 0.55399 0.875H9.91451C10.0646 0.875 10.2031 0.932711 10.3069 1.03659L15.8355 6.56517C16.0548 6.78447 16.0548 7.13073 15.8355 7.33848L10.3069 12.9594C10.2031 13.0633 10.0646 13.121 9.91451 13.121V13.1325Z" fill="#007367" />
          </svg>
          Expérience Professionnelle
        </h5>
        <h1>Diplôme d'expert immobilier</h1>
        <p> Titulaire d'un diplôme d'expert immobilier avec une spécialisation en gestion d'actifs, démontrant une expertise approfondie et une solide compréhension des marchés immobiliers.</p>
        <h1>15 ans d'expérience</h1>
        <p> Cumul d'une expérience professionnelle de plus de 15 ans dans l'industrie immobilière, marquée par des réalisations significatives et une croissance continue.</p>
        <h1>Sociétés de gestion de fonds</h1>
        <p>Parcours professionnel comprenant des années d'expérience au sein de grandes sociétés de gestion de fonds immobiliers, où il a occupé des postes de responsabilité et acquis une connaissance approfondie du secteur.</p>
        <h1>Leadership entrepreneurial</h1>
        <p>Fondateur et président de Beatimo, Philippe Foisy est reconnu pour son leadership visionnaire, sa capacité à innover et à inspirer son équipe pour atteindre des objectifs ambitieux.</p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ValeurSection
