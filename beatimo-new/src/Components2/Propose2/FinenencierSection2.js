import React from 'react'

const FinenencierSection2 = ({buttonClick}) => {
  return (
    <section class="financier-section financier-section-2 financier-section1">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-5">
            <div class="financier-content">
              <h1>
                Mission <br />
                <span> & Vision</span>
              </h1>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="financier-content">
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
              <div class="financier-button">
                <button class="services-btn" onClick={buttonClick}>découvrir notre équipe</button>
                <button class="icon-btn">
                  <img src="assets/image/arrow-bottom-2.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="financier-image">
              <img
                src="assets/image/Rectangle-3.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="financier-image">
              <img
                src="assets/image/Rectangle-2.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinenencierSection2
