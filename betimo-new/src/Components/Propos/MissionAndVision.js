import React from 'react'

const MissionAndVision = ({valeurClick}) => {
  return (
    <>
      <section className="financier-section financier-section1 ">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-5">
        <div className="financier-content">
          <h1>
            Mission <br />
            <span> &amp; Vision</span>
          </h1>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="financier-content">
          <p>
            Beatimo est une entreprise renommée dans le domaine de l'analyse
            et de l'optimisation des performances commerciales. Son
            expertise réside dans sa capacité à utiliser des données
            avancées et des techniques d'analyse pour aider les entreprises
            à améliorer leur efficacité opérationnelle, leur rentabilité et
            leur croissance.
          </p>
          <p>
            Grâce à une équipe de professionnels hautement qualifiés et à
            des technologies de pointe, Beatimo fournit des solutions
            personnalisées qui permettent aux entreprises de prendre des
            décisions éclairées et de maximiser leur potentiel.
          </p>
          <div className="financier-button">
          
            <button className="services-btn" onClick={valeurClick}>découvrir notre équipe</button>
            <button className="icon-btn">
              <img src="assets/image/arrow-bottom.png" alt="mission&vision" />
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="financier-image">
          <img src="assets/image/Rectangle-3.png" className="img-fluid" alt="mission&vission" />
        </div>
      </div>
      <div className="col-lg-7">
        <div className="financier-image">
          <img src="assets/image/Rectangle-2.png" className="img-fluid" alt="mission&vission" />
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default MissionAndVision
