import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ClientSection = () => {
  const navigate =  useNavigate();
  useEffect(() => {
    const openNavForm = () => {
      const sidenav = document.getElementById('formSidenav');
      sidenav.style.width = '50%';
      sidenav.classList.add('open');
      sidenav.style.padding = '50px';
    };

    const closeNavForm = () => {
      const sidenav = document.getElementById('formSidenav');
      sidenav.style.width = '0';
      sidenav.style.padding = '0px';
      sidenav.classList.remove('open');
    };

    window.openNavForm = openNavForm;
    window.closeNavForm = closeNavForm;
  }, []);
  return (
    <>
    <section className="clients-section clients-section-2">
  <div className="propos-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5">
          <div className="propos-image">
            <img src="assets/image/propos-image.png" className="img-fluid" alt="Client-Section" />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="propos-content">
            <h5><img src="assets/image/nos-services-icon.png" alt="Client-Section" /> à propos de beatimo</h5>
            <h1>Maximisez la <br /> <span> Performance </span>
              de <br /> Vos Investissements</h1>
            <div className="propos-content-bottom">
              <p>Grâce à une approche personnalisée et une analyse actuarielle approfondie, nous vous guidons dans la prise de décisions éclairées pour atteindre vos objectifs financiers. Que vous soyez un investisseur novice ou expérimenté, nous sommes là pour vous aider à naviguer dans le marché immobilier avec confiance et succès. </p>
              <div className="propos-button">
                <button onClick={() => navigate("/propos")}>découvrir beatimo</button>
                <img src="assets/image/arrow-right.png" alt="Client-Section"  onClick={() => navigate("/propos")}/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="savoir-content">
            <h5><img src="assets/image/nos-services-icon.png" alt="Client-Section" /> nous joindre</h5>
            <h1><span>Curieux</span> de savoir  <br />
              ce que nous pouvons <br /> faire pour <span>vous?</span></h1>
            <div className="savoir-button">
              <button onClick={()=>window.openNavForm()}>entrer en contact</button>
              <img src="assets/image/arrow-right.png" alt="Client-Section" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <---------------------------------------------------------------  Form SideBAr  ----------------------------------------------------> */}
<div id="formSidenav" className="sidenav sidenav-2">
  <Link href={{javascript:void(0)}} className="closebtn" onClick={()=>window.closeNavForm()}>
    <svg width={47} height={47} viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x={46} y={46} width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46)" fill="#EF8551" />
      <rect x={46} y={46} width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46)" stroke="#EF8551" />
      <path d="M19.2846 28.2057L18.293 27.2141L22.2596 23.2474L18.293 19.2807L19.2846 18.2891L23.2513 22.2557L27.218 18.2891L28.2096 19.2807L24.243 23.2474L28.2096 27.2141L27.218 28.2057L23.2513 24.2391L19.2846 28.2057Z" fill="white" />
    </svg>    
  </Link>
  <div className="sidebar-form">
    <div className="sidebar-form-heading">
      <h1>Nous <span>joindre</span></h1>
      <p>Pour obtenir davantage d'informations, veuillez compléter le formulaire ci-dessous. Nous vous recontacterons dès que possible. Vous pouvez également nous joindre par téléphone ou par courriel.</p>
    </div>
    <div className="sidebar-form-contact">
      <div>
        <svg width={47} height={48} viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x={46} y="46.75" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.75)" fill="#EF8551" />
          <rect x={46} y="46.75" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.75)" stroke="#EF8551" />
          <path d="M31.2 33C29.1167 33 27.0583 32.5458 25.025 31.6375C22.9917 30.7292 21.1417 29.4417 19.475 27.775C17.8083 26.1083 16.5208 24.2583 15.6125 22.225C14.7042 20.1917 14.25 18.1333 14.25 16.05C14.25 15.75 14.35 15.5 14.55 15.3C14.75 15.1 15 15 15.3 15H19.35C19.5833 15 19.7917 15.0792 19.975 15.2375C20.1583 15.3958 20.2667 15.5833 20.3 15.8L20.95 19.3C20.9833 19.5667 20.975 19.7917 20.925 19.975C20.875 20.1583 20.7833 20.3167 20.65 20.45L18.225 22.9C18.5583 23.5167 18.9542 24.1125 19.4125 24.6875C19.8708 25.2625 20.375 25.8167 20.925 26.35C21.4417 26.8667 21.9833 27.3458 22.55 27.7875C23.1167 28.2292 23.7167 28.6333 24.35 29L26.7 26.65C26.85 26.5 27.0458 26.3875 27.2875 26.3125C27.5292 26.2375 27.7667 26.2167 28 26.25L31.45 26.95C31.6833 27.0167 31.875 27.1375 32.025 27.3125C32.175 27.4875 32.25 27.6833 32.25 27.9V31.95C32.25 32.25 32.15 32.5 31.95 32.7C31.75 32.9 31.5 33 31.2 33ZM17.275 21L18.925 19.35L18.5 17H16.275C16.3583 17.6833 16.475 18.3583 16.625 19.025C16.775 19.6917 16.9917 20.35 17.275 21ZM26.225 29.95C26.875 30.2333 27.5375 30.4583 28.2125 30.625C28.8875 30.7917 29.5667 30.9 30.25 30.95V28.75L27.9 28.275L26.225 29.95Z" fill="#FFFAE6" />
        </svg>
        <button>555-555-5555</button>
      </div>
      <div>
        <svg width={47} height={48} viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x={46} y="46.75" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.75)" fill="#EF8551" />
          <rect x={46} y="46.75" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.75)" stroke="#EF8551" />
          <path d="M15.25 32C14.7 32 14.2292 31.8042 13.8375 31.4125C13.4458 31.0208 13.25 30.55 13.25 30V18C13.25 17.45 13.4458 16.9792 13.8375 16.5875C14.2292 16.1958 14.7 16 15.25 16H31.25C31.8 16 32.2708 16.1958 32.6625 16.5875C33.0542 16.9792 33.25 17.45 33.25 18V30C33.25 30.55 33.0542 31.0208 32.6625 31.4125C32.2708 31.8042 31.8 32 31.25 32H15.25ZM23.25 25L15.25 20V30H31.25V20L23.25 25ZM23.25 23L31.25 18H15.25L23.25 23ZM15.25 20V18V30V20Z" fill="#FFFAE6" />
        </svg>    
        <button>INFO@BEATIMO.COM</button>
      </div>
    </div>
    <form action>
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
          <input type="text" placeholder="Entrer votre numéro de téléphone" name id />
        </div>
        <div className="col-md-12">
          <label htmlFor>courriel*</label>
          <input type="text" placeholder="Entrer votre adresse courriel" name id />
        </div>
        <div className="col-md-12">
          <label htmlFor>SUJET*</label>
          <input type="text" placeholder="Sélectionner un sujet" name id />
        </div>
        <div className="col-md-12">
          <label htmlFor>message</label>
          <textarea name rows={3} placeholder="Entrer votre message" id defaultValue={""} />
        </div>
        <div className="col-md-12">
          <div className="form-btn">
            <button>envoyer mon message</button>       
            <svg width={47} height={48} viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x={46} y="46.75" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.75)" fill="#EF8551" />
              <rect x={46} y="46.75" width="45.5" height="45.5" rx="22.75" transform="rotate(-180 46 46.75)" stroke="#EF8551" />
              <g clipPath="url(#clip0_4148_1815)">
                <path d="M35.0303 12.2178C35.1341 12.3218 35.2051 12.454 35.2345 12.598C35.2638 12.742 35.2502 12.8914 35.1953 13.0278L26.4668 34.8483C26.3899 35.0404 26.2614 35.2076 26.0956 35.3315C25.9297 35.4554 25.733 35.5311 25.5269 35.5503C25.3208 35.5696 25.1134 35.5316 24.9275 35.4405C24.7416 35.3494 24.5844 35.2089 24.4733 35.0343L19.7063 27.5418L12.2138 22.7748C12.0388 22.6637 11.8978 22.5065 11.8065 22.3205C11.7152 22.1344 11.677 21.9267 11.6963 21.7203C11.7155 21.514 11.7914 21.3169 11.9155 21.1509C12.0397 20.985 12.2073 20.8565 12.3998 20.7798L34.2203 12.0543C34.3566 11.9994 34.5061 11.9858 34.6501 12.0151C34.7941 12.0444 34.9263 12.1154 35.0303 12.2193V12.2178ZM21.2033 27.1038L25.3448 33.6108L32.4443 15.8628L21.2033 27.1038ZM31.3838 14.8023L13.6358 21.9018L20.1443 26.0418L31.3838 14.8023Z" fill="#FFFAE6" />
              </g>
              <defs>
                <clipPath id="clip0_4148_1815">
                  <rect width={24} height={24} fill="white" transform="translate(11.25 12)" />
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

export default ClientSection
