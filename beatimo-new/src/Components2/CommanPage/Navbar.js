import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Navbar = ({handleLinkClick }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerBackground, setHeaderBackground] = useState("transparent");

  useEffect(() => {
    const openMobileNav = () => {
  
      var sidenav = document.getElementById("myMobileNav");
      sidenav.style.width = "50%";
      sidenav.classList.add("open");
      sidenav.style.padding = "30px";
  }
  const closeMobleNav = () => {
      var sidenav = document.getElementById("myMobileNav");
      sidenav.style.width = "0";
      sidenav.style.padding = "0px";
      sidenav.classList.remove("open");
  }
  window.openMobileNav = openMobileNav;
  window.closeMobleNav=  closeMobleNav;

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
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsHeaderVisible(true);
      setHeaderBackground("transparent");
    } else if (window.scrollY > lastScrollY) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
      setHeaderBackground("rgb(0 0 0 / 31%)"); // Change this to your desired color
    }
    setLastScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [lastScrollY]);

const [formData, setFormData] = useState({
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      "http://localhost:8000/enquiry-create",
      formData
    );
    // console.warn(response);
    //       console.log(formData);
    if (response.data.status === 200) {
      alert(response.data.message)
      Toast.fire({
        icon: "success",
        title: response.data.message
      });
      setFormData({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("500 internal Server error");
    }
  } catch (error) {
    alert(error.response.data.msg);

    Toast.fire({
      icon: "error",
      title: error.response.data.msg
    });
  }
};

  return (
    <>
    <section  className={`header-section ${isHeaderVisible ? 'visible' : 'hidden'}`}
        style={{ backgroundColor: headerBackground }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-xl ">
              <div className="top-header">
                <Link to="/" className="beatimo-arrow"><img src="./assets/image/beatimo-arrow.png" alt="Navbar-img" /></Link>
                <Link className="navbar-brand" to="/capital-home"><img src="./assets/image/beatimo-logo-2.png" alt="Navbar-img" /></Link>
                <Link className="navbar-brand-mobile"  to="/capital-home"><img src="./assets/image/mobile-logo.png" alt="Navbar-img" /></Link>
              </div>
              <div className='header-mobile-right'>
                <Link className="header-mobile-icon" onClick={() => window.openNavForm()} to=""><img src="assets/image/call-icon.png" alt="Navbar-img" /></Link>
                <span onClick={() => window.openMobileNav()}>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="25" fill="white"/>
                    <path d="M16.5 30.6364V29.1364H33.5V30.6364H16.5ZM16.5 25.7518V24.2518H33.5V25.7518H16.5ZM16.5 20.8672V19.3672H33.5V20.8672H16.5Z" fill="#007367"/>
                  </svg>
                </span>
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto ">
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/capital-home">Home</Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/capital-propos">À Propos</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="" onClick={handleLinkClick}>réseaux sociaux</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#" >en</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={()=>window.openNavForm()} to=""><img src="assets/image/call-icon.png" alt="navBar-icon-email" /></Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <div id="myMobileNav" class="sidenav">
      <div className="myMobileNav">
        <div>
          <Link to="/" className="beatimo-arrow"><img src="./assets/image/beatimo-arrow.png" alt="Navbar-img" /></Link>
          <Link className="navbar-brand-mobile" to="/capital-home"><img src="./assets/image/mobile-logo.png" alt="Navbar-img" /></Link>
        </div>
        <div>
          <Link className="header-mobile-icon" onClick={() => window.openNavForm()} to=""><img src="assets/image/call-icon.png" alt="Navbar-img" /></Link>
          <Link to={{javascript:void(0)}} class="closebtn" onClick={() => window.closeMobleNav()}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="25" fill="white"/>
              <path d="M20.9917 29.9167L20 28.925L23.9667 24.9583L20 20.9917L20.9917 20L24.9583 23.9667L28.925 20L29.9167 20.9917L25.95 24.9583L29.9167 28.925L28.925 29.9167L24.9583 25.95L20.9917 29.9167Z" fill="#007367"/>
            </svg>
          </Link>
        </div>
      </div>
      <div className="mobilenav">
          <ul>
            <li><Link to="/capital-propos">À PROPOS</Link></li>
            {/* <li><Link to="" onClick={handleLinkClick}>RÉSEAUX SOCIAUX</Link></li> */}
            <li><Link to="">EN</Link></li>
          </ul>
      </div>
    </div>
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
        <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor="firstname">prénom*</label>
                    <input
                      type="text"
                      placeholder="Entrer votre prénom"
                      name="firstname"
                      id="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="lastname">nom*</label>
                    <input
                      type="text"
                      placeholder="Entrer votre nom"
                      name="lastname"
                      id="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="telephone">numéro de téléphone*</label>
                    <input
                      type="number"
                      placeholder="Entrer votre numéro de téléphone"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="email">courriel*</label>
                    <input
                      type="email"
                      placeholder="Entrer votre adresse courriel"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="subject">SUJET*</label>
                    <input
                      type="text"
                      placeholder="Sélectionner un sujet"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="message">message</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Entrer votre message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="form-btn">
                      <button type="submit">envoyer mon message</button>
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
export default Navbar
