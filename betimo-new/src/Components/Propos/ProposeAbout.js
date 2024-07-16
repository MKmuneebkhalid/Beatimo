import React from 'react'

const ProposeAbout = () => {
  return (
    <>
    <section className="about-section">
  <div className="container-fluid banner-div-top">
    <div className="row">
      <div className="col-lg-6">
        <div className="about-content">
          <div className="about-border">
            <h1>Performante</h1>
            <img src="assets/image/about-icon-1.png" alt="Propose-About-img" />
            <p>Nous valorisons la possibilité d'investir, de contribuer à notre communauté et de nous concentrer sur ce qui compte vraiment pour nous. Cela s'atteint grâce à des stratégies orientés vers la performance.</p>
          </div>
        </div>
        <div className="about-content about-inner">
          <div className="about-border">
            <h1>Experte</h1>
            <img src="assets/image/about-icon-3.png" alt="Propose-About-img" />
            <p>Notre expertise se forge sur le terrain, allant au-delà des formations. Les projets complexes ont affiné notre approche. Notre équipe, composée d'actuaires et de passionnés, offre un accompagnement direct et transparent.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-bottom">
          <div className="about-content">
            <div className="about-border">
              <h1>Empathique</h1>
              <img src="assets/image/about-icon-2.png" alt="Propose-About-img" />
              <p>Nous partageons les mêmes rêves que nos clients. Nous comprenons leur réalité et appliquons les mêmes outils et principes que nous proposons, assurant ainsi une expérience enrichissante.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="h-25vh"></div>
</section>

    </>
  )
}

export default ProposeAbout
