import React from 'react'
import { useNavigate } from 'react-router-dom'

const FinnencierSection2 = () => {
  const navigate = useNavigate()
  return (
    <section className="financier-section financier-section-2"> 
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6">
        <div className="financier-content">
          <h1>L'immobilier, <br />
            c’est <span> bien plus </span> <br />
            qu’un simple <br />
            <span> investissement</span> <br />
            financier.</h1>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="financier-content">
          <p>Beatimo excelle en actuariat, cumulant des années d'expérience. Nos conseils sur mesure, résultat d'une expertise approfondie, optimisent la gestion des risques, la tarification des assurances et la planification financière.</p>
          <p>Bénéficiez d'une approche proactive assurant stabilité et rendements optimaux. Choisissez Beatimo pour une expertise actuarielle d'élite.</p>
          <div className="financier-button">
            <button className="services-btn" onClick={()=>navigate('/capital-propos')}>en savoir plus</button>
            <button className="icon-btn"><img src="assets/image/arrow-right.png" alt="finnecncier-section" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default FinnencierSection2
