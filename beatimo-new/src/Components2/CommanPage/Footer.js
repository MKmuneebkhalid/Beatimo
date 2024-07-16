import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer-section footer-section-2">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4">
        <div className="footer-content">
          <h5><img src="assets/image/nos-services-icon.png" alt="footer-img" />Nos réseaux sociaux</h5>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="footer-content">
          <ul>
            <li>
              <div>
                <span>01</span>
                <p>Facebook</p> 
              </div>
              <svg width={47} height={47} viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="45.5" y="45.5" width="44.5" height="44.5" rx="22.25" transform="rotate(-180 45.5 45.5)" stroke="#EEFFF6" strokeWidth={2} />
                <path d="M20.718 31.8265H24.3295V24.5945H27.5835L27.941 21.001H24.3295V19.1863C24.3295 18.9468 24.4246 18.7172 24.5939 18.5478C24.7633 18.3785 24.9929 18.2834 25.2324 18.2834H27.941V14.6719H25.2324C24.0351 14.6719 22.8868 15.1475 22.0402 15.9941C21.1936 16.8407 20.718 17.989 20.718 19.1863V21.001H18.9122L18.5547 24.5945H20.718V31.8265Z" fill="#EEFFF6" />
              </svg>
            </li>
            <li>
              <div>
                <span>02</span>
                <p>Youtube</p> 
              </div>
              <svg width={47} height={47} viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="45.5" y="45.5" width="44.5" height="44.5" rx="22.25" transform="rotate(-180 45.5 45.5)" stroke="#EEFFF6" strokeWidth={2} />
                <path d="M31.4042 18.7939C31.3074 18.4018 31.1183 18.0443 30.8558 17.7568C30.5932 17.4693 30.2663 17.262 29.9075 17.1554C28.5774 16.7565 23.2559 16.75 23.2559 16.75C23.2559 16.75 17.9352 16.7435 16.6042 17.1248C16.2457 17.2363 15.9195 17.4466 15.6568 17.7354C15.3941 18.0243 15.2038 18.3821 15.1042 18.7744C14.7534 20.2273 14.75 23.2407 14.75 23.2407C14.75 23.2407 14.7466 26.269 15.0949 27.707C15.2902 28.5021 15.8636 29.1302 16.5923 29.3446C17.9361 29.7435 23.2431 29.75 23.2431 29.75C23.2431 29.75 28.5646 29.7565 29.8948 29.3761C30.2537 29.2697 30.5809 29.0629 30.8441 28.776C31.1074 28.4891 31.2975 28.1322 31.3957 27.7404C31.7473 26.2885 31.7499 23.276 31.7499 23.276C31.7499 23.276 31.7669 20.2468 31.4042 18.7939ZM21.5537 26.0324L21.5579 20.4657L25.9808 23.2537L21.5537 26.0324Z" fill="#EEFFF6" />
              </svg>
            </li>
            <li>
              <div>
                <span>03</span>
                <p>LinkedIn</p> 
              </div>
              <svg width={47} height={47} viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="45.5" y="45.5" width="44.5" height="44.5" rx="22.25" transform="rotate(-180 45.5 45.5)" stroke="#EEFFF6" strokeWidth={2} />
                <path d="M18.6091 31.75V20.2801H14.965V31.75H18.6091ZM16.7875 18.7132C18.0583 18.7132 18.8493 17.8324 18.8493 16.7318C18.8256 15.6063 18.0584 14.75 16.8117 14.75C15.5651 14.75 14.75 15.6063 14.75 16.7318C14.75 17.8325 15.5408 18.7132 16.7637 18.7132H16.7874H16.7875ZM20.6261 31.75H24.2703V25.3447C24.2703 25.0019 24.294 24.6594 24.3902 24.4144C24.6536 23.7294 25.2532 23.0201 26.2599 23.0201C27.5786 23.0201 28.1061 24.0719 28.1061 25.6138V31.7499H31.75V25.1732C31.75 21.6501 29.9522 20.0108 27.5546 20.0108C25.5887 20.0108 24.7256 21.1604 24.246 21.9434H24.2704V20.2799H20.6262C20.6741 21.3562 20.6262 31.7498 20.6262 31.7498L20.6261 31.75Z" fill="#EEFFF6" />
              </svg>
            </li>
            <li>
              <div>
                <span>04</span>
                <p>Tiktok</p> 
              </div>
              <svg width={47} height={47} viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="45.5" y="45.5" width="44.5" height="44.5" rx="22.25" transform="rotate(-180 45.5 45.5)" stroke="#EEFFF6" strokeWidth={2} />
                <path d="M29.855 18.7377C28.9972 18.5513 28.2212 18.1012 27.6384 17.452C27.0555 16.8028 26.6958 15.9878 26.6108 15.1241V14.75H23.6419V26.3729C23.6425 26.8886 23.4789 27.3914 23.1742 27.8102C22.8695 28.2289 22.4391 28.5423 21.9442 28.7059C21.4492 28.8696 20.9146 28.8752 20.4162 28.722C19.9178 28.5688 19.4808 28.2645 19.1671 27.8523C18.8861 27.4874 18.7141 27.0521 18.6704 26.5956C18.6267 26.1391 18.7132 25.6797 18.92 25.2692C19.1268 24.8588 19.4457 24.5137 19.8407 24.273C20.2357 24.0323 20.6909 23.9055 21.155 23.9071C21.4116 23.9057 21.667 23.943 21.9123 24.0177V21.0418C21.6268 21.0069 21.3392 20.9927 21.0517 20.9993C19.9927 21.0273 18.9648 21.3598 18.0941 21.9561C17.2234 22.5524 16.5476 23.3866 16.1494 24.3566C15.7512 25.3266 15.6479 26.3903 15.8523 27.4174C16.0566 28.4446 16.5596 29.3905 17.2998 30.1395C18.0583 30.9014 19.029 31.4234 20.0885 31.6391C21.148 31.8548 22.2485 31.7544 23.2501 31.3507C24.2517 30.947 25.1093 30.2582 25.7138 29.3719C26.3183 28.4856 26.6425 27.4417 26.6452 26.3729V20.4211C27.8426 21.2662 29.2785 21.7183 30.75 21.7135V18.8227C30.4609 18.8239 30.1726 18.7954 29.8895 18.7377H29.855Z" fill="#EEFFF6" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="footer-logo">
          <img src="assets/image/footer-logo-2.png" className="img-fluid" alt="footer-img" />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="footer-bottom">
          <div>
            <p><Link to="" className='text-light'>Copyright © 2024 beatimo | Tout droits réservés</Link></p>
            <p><Link to="" className='text-light'>Préférence des témoins</Link></p>
            <p><Link to="/capital-terms&condition" className='text-light'>Politiques et confidentialité </Link> </p>
          </div>
          <p><Link to="" className='text-light'>Site par Les Mauvais Garçons</Link> </p>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
