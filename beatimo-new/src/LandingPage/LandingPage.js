import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image2 from "./Assets/image1.png";
import imageNew from "./Assets/image2-1.png";
import logo from "./Assets/group.png";
import sublogo from "./Assets/Group2.png";
import sublogo2 from "./Assets/capital.png";
import logo1 from "./Assets/logo-1.png";
import logo2 from "./Assets/logo-2.png";
import "../App.css";
import "./style.css";

// import BannerImage from './assets/image/Hover-Consulting.png' ;

const LandingPage = () => {
  const BannerImage1 = `${process.env.PUBLIC_URL}/assets/image/Hover-Consulting.png`;
  const BannerImage2 = `${process.env.PUBLIC_URL}/assets/image/home-benner-2.png`;
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isClick, setisClick] = useState(false);
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, currentTarget } = e;
    const { width, left } = currentTarget.getBoundingClientRect();
    const cursorPosition = clientX - left;

    if (cursorPosition < width / 2) {
      setActiveIndex(0);
    } else {
      setActiveIndex(1);
    }
  };

  const HandleClick = () => {
    setIsZoomed1(true);
    setisClick(true);
    setTimeout(() => {
      navigate("/services-conseils");
    }, 700);
  };

  const HandleClick2 = () => {
    setIsZoomed(true);
    setTimeout(() => {
      navigate("/capital-home");
    }, 500);
  };

  const userData = {
    TitleTop1: " Conseils actuariels de pointe pour maximiser la performance de vos investissements immobiliers",
    TitleTop2: " Une société performante avec l'objectif de créer de la valeur à travers l'investissement immobilier.",
    TitleBottom1: "DÉCOUVRIR SERVICES-CONSEILS",
    TitleBottom2: "DÉCOUVRIR CAPITAL",
  };

  return (
    <div className={`site-selection ${isHovering ? "fade-out" : ""}`}>
      <img src={BannerImage1} className="d-none" alt="Dummy" />
      <img src={BannerImage2} className="d-none" alt="Dummy" />
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div
            id="img-container"
            style={{
              width: "100%",
              height: "100vh",
              margin: "auto",
              display: "flex",
            }}
            className={isClick ? "mobile-active" : ""}
            onMouseMove={handleMouseMove}
            onMouseOut={() => setActiveIndex(-1)}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: activeIndex === 1 ? "59%" : activeIndex === 0 ? "41%" : "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                textAlign: "center",
                color: "white",
                transition: "all 1s ease-out",
              }}
            >
              <img className="logo" src={logo} alt="Center Main" />
            </div>
            <div
              className={`image-overlay animate1 ${isZoomed1 ? "zoom1" : ""} ${isZoomed ? "custome-div" : ""}`}
              style={{
                width: activeIndex === 0 ? "85%" : activeIndex === 1 ? "15%" : "50%",
                height: "100%",
                backgroundColor: "white",
                marginRight: "-2.5px",
                marginLeft: "-2.5px",
                paddingRight: "0px",
                paddingLeft: "0px",
                objectFit: "cover",
                transition: "width 1.5s",
                position: "relative",
              }}
              onClick={HandleClick}
            >
              <img
                onMouseLeave={() => setIsHovering(false)}
                src={imageNew}
                alt="Dynamic 0"
                className="img-expand"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "fixed",
                  transition: "left 0.8s ease 0s, transform 1s ease 0s",
                  left: isClick ? "0px" : "-210px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  color: "white",
                  margin: "auto",
                  textAlign: "center",
                  opacity: activeIndex === 0 || activeIndex === -1 ? 1 : 0,
                  transition: "opacity 0.5s",
                  zIndex: 9,
                }}
              >
                <h4
                  className={`TitleTop1 ${activeIndex === 0 || activeIndex === -1 ? "slideUpAnimation " : ""}`}
                >
                  {userData.TitleTop1}
                </h4>
              </div>
              <img className="mobile-logo" src={logo1} alt="Center Main" />
              {activeIndex === 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "60%",
                    right: 0,
                    color: "white",
                    left: 0,
                    paddingRight: "100px",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img className="logo" src={sublogo} alt="Center Main" />
                </div>
              )}
              <div
                style={{
                  position: "absolute",
                  bottom: "50px",
                  left: 0,
                  right: 0,
                  color: "white",
                  margin: "auto",
                  textAlign: "center",
                  opacity: activeIndex === 0 || activeIndex === -1 ? 1 : 0,
                  transition: "opacity 0.5s",
                }}
              >
                <p
                  className={` ${activeIndex === 0 || activeIndex === -1 ? "slideDownAnimation " : ""}`}
                  style={{
                    borderBottom: "1px solid #fff",
                    width: "fit-content",
                    margin: "auto",
                  }}
                >
                  {userData.TitleBottom1}
                </p>
              </div>
            </div>
            <div
              className={`image-overlay animate ${isZoomed ? "zoom" : ""} ${isZoomed1 ? "custome-div-1" : ""}`}
              style={{
                width: activeIndex === 1 ? "85%" : activeIndex === 0 ? "15%" : "50%",
                height: "100%",
                backgroundColor: "white",
                marginRight: "-2.5px",
                marginLeft: "-2.5px",
                paddingRight: "0px",
                paddingLeft: "0px",
                objectFit: "cover",
                transition: "width 1.5s",
                position: "relative",
              }}
              onClick={HandleClick2}
            >
              <img
                onMouseLeave={() => setIsHovering(false)}
                src={image2}
                alt="Dynamic 1"
                className="img-expand"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "fixed",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  color: "white",
                  margin: "auto",
                  textAlign: "center",
                  opacity: activeIndex === 1 || activeIndex === -1 ? 1 : 0,
                  transition: "opacity 0.5s",
                  zIndex: 9,
                }}
              >
                <h4
                  className={`TitleTop1 ${activeIndex === 1 || activeIndex === -1 ? "slideUpAnimation " : ""}`}
                >
                  {userData.TitleTop2}
                </h4>
              </div>
              <img className="mobile-logo" src={logo2} alt="Center Main" />
              {activeIndex === 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "60%",
                    right: 0,
                    color: "white",
                    left: 0,
                    paddingRight: "200px",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img className="logo" src={sublogo2} alt="Center Main" />
                </div>
              )}
              <div
                style={{
                  position: "absolute",
                  bottom: "50px",
                  left: 0,
                  right: 0,
                  color: "white",
                  margin: "auto",
                  textAlign: "center",
                  opacity: activeIndex === 1 || activeIndex === -1 ? 1 : 0,
                  transition: "opacity 0.5s",
                }}
              >
                <p
                  className={` ${activeIndex === 1 || activeIndex === -1 ? "slideDownAnimation " : ""}`}
                  style={{
                    borderBottom: "1px solid #fff",
                    width: "fit-content",
                    margin: "auto",
                  }}
                >
                  {userData.TitleBottom2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
