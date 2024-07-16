import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const CarrierService = () => {
    useEffect(()=>{
        const openCandidature = ()=>{
            var sidenav = document.getElementById("CandidatureSidenav");
            sidenav.style.width = "50%";
            sidenav.classList.add("open");
            sidenav.style.padding = "30px";
        }
      
      const    closeCandidature = ()=> {
            var sidenav = document.getElementById("CandidatureSidenav");
            sidenav.style.width = "0";
            sidenav.style.padding = "0px";
            sidenav.classList.remove("open");
        }
        window.openCandidature = openCandidature;
        window.closeCandidature = closeCandidature;
        const openCarrier = ()=> {
            var sidenav = document.getElementById("CarrierSidenav");
            sidenav.style.width = "50%";
            sidenav.classList.add("open");
            sidenav.style.padding = "30px";
        }
        
         const closeCarrier = ()=> {
            var sidenav = document.getElementById("CarrierSidenav");
            sidenav.style.width = "0";
            sidenav.style.padding = "0px";
            sidenav.classList.remove("open");
        }
        window.openCarrier = openCarrier;
    window.closeCarrier = closeCarrier;
        
    },[])
    const [carrierData, setCarrierData] = useState({
      prenom: '',
      nom: '',
      telephone: '',
      message: '',
      file: null,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCarrierData({ ...carrierData, [name]: value });
    };
  
    const handleFileChange = (e) => {
      setCarrierData({ ...carrierData, file: e.target.files[0] });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(carrierData);
    };

  return (
    <>
     <section className="nos-services-section  nos-services-section-3">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6">
        <div className="nos-services-left">
          <h5><img src="assets/image/nos-services-icon.png" alt="Carrier-Service-img" /> Nos postes disponibles</h5>
          <h1>Explorez les <span> opportunités </span> disponibles <br /> chez nous.</h1>
          <div className="propos-button mt-4">
            <button onClick={()=>window.openCandidature()}>candidature spontannée</button>
            <svg width={47} height={48} viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x={46} y="46.75" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.75)" fill="#EEFFF6" />
              <rect x={46} y="46.75" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.75)" stroke="#EEFFF6" />
              <path d="M15.25 32C14.7 32 14.2292 31.8042 13.8375 31.4125C13.4458 31.0208 13.25 30.55 13.25 30V18C13.25 17.45 13.4458 16.9792 13.8375 16.5875C14.2292 16.1958 14.7 16 15.25 16H31.25C31.8 16 32.2708 16.1958 32.6625 16.5875C33.0542 16.9792 33.25 17.45 33.25 18V30C33.25 30.55 33.0542 31.0208 32.6625 31.4125C32.2708 31.8042 31.8 32 31.25 32H15.25ZM23.25 25L15.25 20V30H31.25V20L23.25 25ZM23.25 23L31.25 18H15.25L23.25 23ZM15.25 20V18V30V20Z" fill="#007367" />
            </svg>
          </div>
        </div>  
      </div>
      <div className="col-lg-6">
        <div className="carrier-services-right">
          <ul>
            <li onClick={()=> window.openCarrier()}>
              <div className="carrier-services-li">
                <h5>  <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.91451 13.1325H0.55399C0.2539 13.1325 0 12.8902 0 12.5785V1.42901C0 1.12892 0.242358 0.875 0.55399 0.875H9.91451C10.0646 0.875 10.2031 0.932711 10.3069 1.03659L15.8355 6.56517C16.0548 6.78447 16.0548 7.13073 15.8355 7.33848L10.3069 12.9594C10.2031 13.0633 10.0646 13.121 9.91451 13.121V13.1325Z" fill="#EEFFF6" />
                  </svg>Temps plein - Montréal</h5>
                <p>Analyse de projets </p>
              </div>  
              <img src="assets/image/arrow_right.png" alt="Carrier-Service-img" />
            </li>
            <li onClick={()=> window.openCarrier()}>
              <div className="carrier-services-li">
                <h5>  <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.91451 13.1325H0.55399C0.2539 13.1325 0 12.8902 0 12.5785V1.42901C0 1.12892 0.242358 0.875 0.55399 0.875H9.91451C10.0646 0.875 10.2031 0.932711 10.3069 1.03659L15.8355 6.56517C16.0548 6.78447 16.0548 7.13073 15.8355 7.33848L10.3069 12.9594C10.2031 13.0633 10.0646 13.121 9.91451 13.121V13.1325Z" fill="#EEFFF6" />
                  </svg>Temps plein - Montréal</h5>
                <p>Conseiller en investissement immobilier </p>
              </div>  
              <img src="assets/image/arrow_right.png" alt="Carrier-Service-img" />
            </li>
            <li onClick={()=> window.openCarrier()}>
              <div className="carrier-services-li">
                <h5>  <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.91451 13.1325H0.55399C0.2539 13.1325 0 12.8902 0 12.5785V1.42901C0 1.12892 0.242358 0.875 0.55399 0.875H9.91451C10.0646 0.875 10.2031 0.932711 10.3069 1.03659L15.8355 6.56517C16.0548 6.78447 16.0548 7.13073 15.8355 7.33848L10.3069 12.9594C10.2031 13.0633 10.0646 13.121 9.91451 13.121V13.1325Z" fill="#EEFFF6" />
                  </svg>Temps plein - Québec</h5>
                <p>Agent immobilier commercial </p>
              </div>  
              <img src="assets/image/arrow_right.png" alt="Carrier-Service-img" />
            </li>
            <li onClick={()=> window.openCarrier()}>
              <div className="carrier-services-li">
                <h5>  <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.91451 13.1325H0.55399C0.2539 13.1325 0 12.8902 0 12.5785V1.42901C0 1.12892 0.242358 0.875 0.55399 0.875H9.91451C10.0646 0.875 10.2031 0.932711 10.3069 1.03659L15.8355 6.56517C16.0548 6.78447 16.0548 7.13073 15.8355 7.33848L10.3069 12.9594C10.2031 13.0633 10.0646 13.121 9.91451 13.121V13.1325Z" fill="#EEFFF6" />
                  </svg>Temps plein - Québec</h5>
                <p>Gestionnaire de portefeuille immobilier</p>
              </div>  
              <img src="assets/image/arrow_right.png" alt="Carrier-Service-img" />
            </li>
            <li onClick={()=> window.openCarrier()}>
              <div className="carrier-services-li">
                <h5>  <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.91451 13.1325H0.55399C0.2539 13.1325 0 12.8902 0 12.5785V1.42901C0 1.12892 0.242358 0.875 0.55399 0.875H9.91451C10.0646 0.875 10.2031 0.932711 10.3069 1.03659L15.8355 6.56517C16.0548 6.78447 16.0548 7.13073 15.8355 7.33848L10.3069 12.9594C10.2031 13.0633 10.0646 13.121 9.91451 13.121V13.1325Z" fill="#EEFFF6" />
                  </svg>Temps plein - Québec</h5>
                <p>Expert en évaluation immobilière </p>
              </div>  
              <img src="assets/image/arrow_right.png" alt="Carrier-Service-img" />
            </li>
            <li onClick={()=> window.openCarrier()}>
              <div className="carrier-services-li">
                <h5>  <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.91451 13.1325H0.55399C0.2539 13.1325 0 12.8902 0 12.5785V1.42901C0 1.12892 0.242358 0.875 0.55399 0.875H9.91451C10.0646 0.875 10.2031 0.932711 10.3069 1.03659L15.8355 6.56517C16.0548 6.78447 16.0548 7.13073 15.8355 7.33848L10.3069 12.9594C10.2031 13.0633 10.0646 13.121 9.91451 13.121V13.1325Z" fill="#EEFFF6" />
                  </svg>Temps plein - Québec</h5>
                <p>Chargé de recherche immobilière </p>
              </div>  
              <img src="assets/image/arrow_right.png" alt="Carrier-Service-img" />
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="Nous-content">
          <h5><img src="assets/image/nos-services-icon.png" alt="Carrier-Service-img" /> À propos</h5>
          <h1><span>Curieux </span> de découvrir qui <br /> nous <span> sommes </span> et de ce que <br />
            nous <span>représentons? </span></h1>
          <div className="Nous-button">
          <Link to="/propos">
            <button className="Nous-btn">Découvrir beatimo </button>
            <img className='ps-2' src="assets/image/arrow_right.png" alt="Carrier-Service-img" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
  <div id="CarrierSidenav" className="sidenav">
    <Link to={{javascript:void(0)}} className="closebtn" onClick={()=> window.closeCarrier()}>
      <svg width={47} height={47} viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x={46} y={46} width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46)" fill="#007367" />
        <rect x={46} y={46} width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46)" stroke="#007367" />
        <path d="M19.2807 28.2057L18.2891 27.2141L22.2557 23.2474L18.2891 19.2807L19.2807 18.2891L23.2474 22.2557L27.2141 18.2891L28.2057 19.2807L24.2391 23.2474L28.2057 27.2141L27.2141 28.2057L23.2474 24.2391L19.2807 28.2057Z" fill="white" />
      </svg>
    </Link>
    <div className="sidebar-top">
      <h1>Analyste financier  <br />
        <span>immobilier</span></h1>
      <div className="propos-button mt-4">
        <button>postuler en ligne</button>
        <svg width={47} height={48} viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x={46} y="46.75" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.75)" fill="#EEFFF6" />
          <rect x={46} y="46.75" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.75)" stroke="#EEFFF6" />
          <path d="M15.25 32C14.7 32 14.2292 31.8042 13.8375 31.4125C13.4458 31.0208 13.25 30.55 13.25 30V18C13.25 17.45 13.4458 16.9792 13.8375 16.5875C14.2292 16.1958 14.7 16 15.25 16H31.25C31.8 16 32.2708 16.1958 32.6625 16.5875C33.0542 16.9792 33.25 17.45 33.25 18V30C33.25 30.55 33.0542 31.0208 32.6625 31.4125C32.2708 31.8042 31.8 32 31.25 32H15.25ZM23.25 25L15.25 20V30H31.25V20L23.25 25ZM23.25 23L31.25 18H15.25L23.25 23ZM15.25 20V18V30V20Z" fill="#007367" />
        </svg>
      </div>
    </div>
    <div className="sidebar-inner">
      <h5>
        <svg width={16} height={13} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector" d="M9.91451 12.4138H0.55399C0.2539 12.4138 0 12.1714 0 11.8598V0.710264C0 0.410174 0.242358 0.15625 0.55399 0.15625H9.91451C10.0646 0.15625 10.2031 0.213961 10.3069 0.317839L15.8355 5.84642C16.0548 6.06572 16.0548 6.41198 15.8355 6.61973L10.3069 12.2407C10.2031 12.3445 10.0646 12.4022 9.91451 12.4022V12.4138Z" fill="#007367" />
        </svg>
        Description
      </h5>
      <p>En tant qu'Analyste Financier Immobilier, vous incarnez le pivot stratégique au sein du secteur immobilier en orchestrant des analyses financières pointues qui guident les décisions d'investissement. Vous êtes l'architecte de la compréhension financière des projets, déployant votre expertise pour évaluer la viabilité, anticiper les rendements et minimiser les risques.</p>
      <p>Dans un environnement dynamique, vous jonglez avec des données complexes pour transformer des chiffres en stratégie, contribuant ainsi au succès financier des projets immobiliers.</p>
      <div className="sidebar-bottom">
        <h5>
          <svg width={16} height={13} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M9.91451 12.4138H0.55399C0.2539 12.4138 0 12.1714 0 11.8598V0.710264C0 0.410174 0.242358 0.15625 0.55399 0.15625H9.91451C10.0646 0.15625 10.2031 0.213961 10.3069 0.317839L15.8355 5.84642C16.0548 6.06572 16.0548 6.41198 15.8355 6.61973L10.3069 12.2407C10.2031 12.3445 10.0646 12.4022 9.91451 12.4022V12.4138Z" fill="#007367" />
          </svg>
          Ton quotidien
        </h5>
        <h1>Analyse des données</h1>
        <p>Collecte et analyse des données financières et immobilières pour évaluer les performances des actifs et identifier les tendances du marché.</p>
        <h1>Évaluation des propriétés</h1>
        <p>Évaluation des propriétés immobilières en utilisant des méthodes d'évaluation telles que la méthode du revenu, la méthode comparative et la méthode du coût.</p>
        <h1>Préparation de rapports</h1>
        <p>Préparation de rapports d'analyse financière et immobilière comprenant des recommandations pour les investissements ou les désinvestissements.</p>
        <h1>Modélisation financière</h1>
        <p>Création de modèles financiers pour simuler différents scénarios d'investissement et évaluer leur impact sur les rendements.</p>
      </div>
      <div className="sidebar-bottom">
        <h5>
          <svg width={16} height={13} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M9.91451 12.4138H0.55399C0.2539 12.4138 0 12.1714 0 11.8598V0.710264C0 0.410174 0.242358 0.15625 0.55399 0.15625H9.91451C10.0646 0.15625 10.2031 0.213961 10.3069 0.317839L15.8355 5.84642C16.0548 6.06572 16.0548 6.41198 15.8355 6.61973L10.3069 12.2407C10.2031 12.3445 10.0646 12.4022 9.91451 12.4022V12.4138Z" fill="#007367" />
          </svg>
          ce qu’il te faut
        </h5>
        <h1>Compétences analytiques</h1>
        <p>Posséder de solides compétences analytiques pour interpréter les données financières et immobilières avec précision.</p>
        <h1>Connaissance des marchés</h1>
        <p>Avoir une connaissance approfondie des marchés immobiliers locaux et régionaux pour identifier les tendances et les opportunités.</p>
        <h1>Maîtrise des outils</h1>
        <p> Être à l'aise avec l'utilisation des logiciels d'analyse financière et des outils de modélisation pour effectuer des analyses complexes.</p>
        <h1>Esprit critique</h1>
        <p>Avoir un esprit critique pour remettre en question les hypothèses et les conclusions, et proposer des solutions créatives.</p>
      </div>
    </div>
    <div className="sidebar-form">
      <div className="sidebar-form-heading">
        <h1>Postuler  <span>en ligne</span></h1>
      </div>
      {/* <form action>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor>prénom*</label>
            <input type="text" placeholder="Entrer votre prénom" name id />
          </div>
          <div className="col-md-12">
            <label htmlFor>nom*</label>
            <input type="text" placeholder="Entrer votre nom" name id />
          </div>
          <div className="col-md-12">
            <label htmlFor>numéro de téléphone*</label>
            <input type="text" placeholder="Entrer votre numéro" name id />
          </div>
          <div className="col-md-12">
            <label htmlFor>curriculum vitae*</label>
            <div className="box">
              <input type="file" />        
              <svg width={47} height={47} viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x={46} y="46.3203" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.3203)" fill="#007367" />
                <rect x={46} y="46.3203" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.3203)" stroke="#007367" />
                <path d="M19.25 29.5703H27.25V27.5703H19.25V29.5703ZM19.25 25.5703H27.25V23.5703H19.25V25.5703ZM17.25 33.5703C16.7 33.5703 16.2292 33.3745 15.8375 32.9828C15.4458 32.5911 15.25 32.1203 15.25 31.5703V15.5703C15.25 15.0203 15.4458 14.5495 15.8375 14.1578C16.2292 13.7661 16.7 13.5703 17.25 13.5703H25.25L31.25 19.5703V31.5703C31.25 32.1203 31.0542 32.5911 30.6625 32.9828C30.2708 33.3745 29.8 33.5703 29.25 33.5703H17.25ZM24.25 20.5703V15.5703H17.25V31.5703H29.25V20.5703H24.25Z" fill="#EEFFF6" />
              </svg>    
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor>message</label>
            <textarea name rows={3} placeholder="Entrer votre message" id defaultValue={""} />
          </div>
          <div className="col-md-12">
            <div className="form-btn">
              <button>envoyer mon message</button>
              <svg width={47} height={48} viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x={46} y="46.75" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.75)" fill="#007367" />
                <rect x={46} y="46.75" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.75)" stroke="#007367" />
                <g clipPath="url(#clip0_4148_1699)">
                  <path d="M35.0303 12.2178C35.1341 12.3218 35.2051 12.454 35.2345 12.598C35.2638 12.742 35.2502 12.8914 35.1953 13.0278L26.4668 34.8483C26.3899 35.0404 26.2614 35.2076 26.0956 35.3315C25.9297 35.4554 25.733 35.5311 25.5269 35.5503C25.3208 35.5696 25.1134 35.5316 24.9275 35.4405C24.7416 35.3494 24.5844 35.2089 24.4733 35.0343L19.7063 27.5418L12.2138 22.7748C12.0388 22.6637 11.8978 22.5065 11.8065 22.3205C11.7152 22.1344 11.677 21.9267 11.6963 21.7203C11.7155 21.514 11.7914 21.3169 11.9155 21.1509C12.0397 20.985 12.2073 20.8565 12.3998 20.7798L34.2203 12.0543C34.3566 11.9994 34.5061 11.9858 34.6501 12.0151C34.7941 12.0444 34.9263 12.1154 35.0303 12.2193V12.2178ZM21.2033 27.1038L25.3448 33.6108L32.4443 15.8628L21.2033 27.1038ZM31.3838 14.8023L13.6358 21.9018L20.1443 26.0418L31.3838 14.8023Z" fill="#FFFAE6" />
                </g>
                <defs>
                  <clipPath id="clip0_4148_1699">
                    <rect width={24} height={24} fill="white" transform="translate(11.25 12)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </form> */}
      <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12">
          <label htmlFor="prenom">prénom*</label>
          <input type="text" placeholder="Entrer votre prénom" name="prenom" id="prenom" value={carrierData.prenom} onChange={handleChange} required/>
        </div>
        <div className="col-md-12">
          <label htmlFor="nom">nom*</label>
          <input type="text" placeholder="Entrer votre nom" name="nom" id="nom" value={carrierData.nom} onChange={handleChange} required/>
        </div>
        <div className="col-md-12">
          <label htmlFor="telephone">numéro de téléphone*</label>
          <input type="text" placeholder="Entrer votre numéro" name="telephone" id="telephone" value={carrierData.telephone} onChange={handleChange} required/>
        </div>
        <div className="col-md-12">
          <label htmlFor="file">curriculum vitae*</label>
          <div className="box">
            <input type="file" name="file" id="file" accept=".pdf" onChange={handleFileChange} required/>
            {/* SVG image  */}
            <svg width={47} height={47} viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x={46} y="46.3203" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.3203)" fill="#007367" /> 
              <rect x={46} y="46.3203" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.3203)" stroke="#007367"/>
              <path d="M19.25 29.5703H27.25V27.5703H19.25V29.5703ZM19.25 25.5703H27.25V23.5703H19.25V25.5703ZM17.25 33.5703C16.7 33.5703 16.2292 33.3745 15.8375 32.9828C15.4458 32.5911 15.25 32.1203 15.25 31.5703V15.5703C15.25 15.0203 15.4458 14.5495 15.8375 14.1578C16.2292 13.7661 16.7 13.5703 17.25 13.5703H25.25L31.25 19.5703V31.5703C31.25 32.1203 31.0542 32.5911 30.6625 32.9828C30.2708 33.3745 29.8 33.5703 29.25 33.5703H17.25ZM24.25 20.5703V15.5703H17.25V31.5703H29.25V20.5703H24.25Z"fill="#EEFFF6" />
            </svg>
          </div>
        </div>
        <div className="col-md-12">
          <label htmlFor="message">message</label>
          <textarea name="message" rows={3} placeholder="Entrer votre message" id="message" value={carrierData.message} onChange={handleChange}
          />
        </div>
        <div className="col-md-12">
          <div className="form-btn">
            <button type="submit">envoyer mon message</button>
            <svg
              width={47}
              height={48}
              viewBox="0 0 47 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x={46}
                y="46.75"
                width="45.5"
                height="45.5"
                rx="22.75"
                transform="rotate(-180 46 46.75)"
                fill="#007367"
              />
              <rect
                x={46}
                y="46.75"
                width="45.5"
                height="45.5"
                rx="22.75"
                transform="rotate(-180 46 46.75)"
                stroke="#007367"
              />
              <g clipPath="url(#clip0_4148_1699)">
                <path
                  d="M35.0303 12.2178C35.1341 12.3218 35.2051 12.454 35.2345 12.598C35.2638 12.742 35.2502 12.8914 35.1953 13.0278L26.4668 34.8483C26.3899 35.0404 26.2614 35.2076 26.0956 35.3315C25.9297 35.4554 25.733 35.5311 25.5269 35.5503C25.3208 35.5696 25.1134 35.5316 24.9275 35.4405C24.7416 35.3494 24.5844 35.2089 24.4733 35.0343L19.7063 27.5418L12.2138 22.7748C12.0388 22.6637 11.8978 22.5065 11.8065 22.3205C11.7152 22.1344 11.677 21.9267 11.6963 21.7203C11.7155 21.514 11.7914 21.3169 11.9155 21.1509C12.0397 20.985 12.2073 20.8565 12.3998 20.7798L34.2203 12.0543C34.3566 11.9994 34.5061 11.9858 34.6501 12.0151C34.7941 12.0444 34.9263 12.1154 35.0303 12.2193V12.2178ZM21.2033 27.1038L25.3448 33.6108L32.4443 15.8628L21.2033 27.1038ZM31.3838 14.8023L13.6358 21.9018L20.1443 26.0418L31.3838 14.8023Z"
                  fill="#FFFAE6"
                />
              </g>
              <defs>
                <clipPath id="clip0_4148_1699">
                  <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(11.25 12)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </form>
    </div>
  </div>
  <div id="CandidatureSidenav" className="sidenav">
    <Link to={{javascript:void(0)}} className="closebtn" onClick={()=>window.closeCandidature()}>
      <svg width={47} height={47} viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x={46} y={46} width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46)" fill="#007367" />
        <rect x={46} y={46} width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46)" stroke="#007367" />
        <path d="M19.2807 28.2057L18.2891 27.2141L22.2557 23.2474L18.2891 19.2807L19.2807 18.2891L23.2474 22.2557L27.2141 18.2891L28.2057 19.2807L24.2391 23.2474L28.2057 27.2141L27.2141 28.2057L23.2474 24.2391L19.2807 28.2057Z" fill="white" />
      </svg>
    </Link>
    <div className="sidebar-form">
      <div className="sidebar-form-heading">
        <h1>Postuler  <span>en ligne</span></h1>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12">
          <label htmlFor="prenom">prénom*</label>
          <input type="text" placeholder="Entrer votre prénom" name="prenom" id="prenom" value={carrierData.prenom} onChange={handleChange} required/>
        </div>
        <div className="col-md-12">
          <label htmlFor="nom">nom*</label>
          <input type="text" placeholder="Entrer votre nom" name="nom" id="nom" value={carrierData.nom} onChange={handleChange} required/>
        </div>
        <div className="col-md-12">
          <label htmlFor="telephone">numéro de téléphone*</label>
          <input type="text" placeholder="Entrer votre numéro" name="telephone" id="telephone" value={carrierData.telephone} onChange={handleChange} required/>
        </div>
        <div className="col-md-12">
          <label htmlFor="file">curriculum vitae*</label>
          <div className="box">
            <input type="file" name="file" id="file" accept=".pdf" onChange={handleFileChange} required/>
            {/* SVG image  */}
            <svg width={47} height={47} viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x={46} y="46.3203" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.3203)" fill="#007367" /> 
              <rect x={46} y="46.3203" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.3203)" stroke="#007367"/>
              <path d="M19.25 29.5703H27.25V27.5703H19.25V29.5703ZM19.25 25.5703H27.25V23.5703H19.25V25.5703ZM17.25 33.5703C16.7 33.5703 16.2292 33.3745 15.8375 32.9828C15.4458 32.5911 15.25 32.1203 15.25 31.5703V15.5703C15.25 15.0203 15.4458 14.5495 15.8375 14.1578C16.2292 13.7661 16.7 13.5703 17.25 13.5703H25.25L31.25 19.5703V31.5703C31.25 32.1203 31.0542 32.5911 30.6625 32.9828C30.2708 33.3745 29.8 33.5703 29.25 33.5703H17.25ZM24.25 20.5703V15.5703H17.25V31.5703H29.25V20.5703H24.25Z"fill="#EEFFF6" />
            </svg>
          </div>
        </div>
        <div className="col-md-12">
          <label htmlFor="message">message</label>
          <textarea name="message" rows={3} placeholder="Entrer votre message" id="message" value={carrierData.message} onChange={handleChange}
          />
        </div>
        <div className="col-md-12">
          <div className="form-btn">
            <button type="submit">envoyer mon message</button>
            <svg
              width={47}
              height={48}
              viewBox="0 0 47 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x={46}
                y="46.75"
                width="45.5"
                height="45.5"
                rx="22.75"
                transform="rotate(-180 46 46.75)"
                fill="#007367"
              />
              <rect
                x={46}
                y="46.75"
                width="45.5"
                height="45.5"
                rx="22.75"
                transform="rotate(-180 46 46.75)"
                stroke="#007367"
              />
              <g clipPath="url(#clip0_4148_1699)">
                <path
                  d="M35.0303 12.2178C35.1341 12.3218 35.2051 12.454 35.2345 12.598C35.2638 12.742 35.2502 12.8914 35.1953 13.0278L26.4668 34.8483C26.3899 35.0404 26.2614 35.2076 26.0956 35.3315C25.9297 35.4554 25.733 35.5311 25.5269 35.5503C25.3208 35.5696 25.1134 35.5316 24.9275 35.4405C24.7416 35.3494 24.5844 35.2089 24.4733 35.0343L19.7063 27.5418L12.2138 22.7748C12.0388 22.6637 11.8978 22.5065 11.8065 22.3205C11.7152 22.1344 11.677 21.9267 11.6963 21.7203C11.7155 21.514 11.7914 21.3169 11.9155 21.1509C12.0397 20.985 12.2073 20.8565 12.3998 20.7798L34.2203 12.0543C34.3566 11.9994 34.5061 11.9858 34.6501 12.0151C34.7941 12.0444 34.9263 12.1154 35.0303 12.2193V12.2178ZM21.2033 27.1038L25.3448 33.6108L32.4443 15.8628L21.2033 27.1038ZM31.3838 14.8023L13.6358 21.9018L20.1443 26.0418L31.3838 14.8023Z"
                  fill="#FFFAE6"
                />
              </g>
              <defs>
                <clipPath id="clip0_4148_1699">
                  <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(11.25 12)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </form>
    </div>
  </div>

    </>
  )
}

export default CarrierService;
