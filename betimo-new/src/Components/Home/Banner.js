import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = process.env.PUBLIC_URL + './assets/image/Hover-Consulting.png';
        img.onload = () => {
            setTimeout(() => {
                setIsLoaded(true);
            }, 300);
        };
    }, []);

    const backgroundStyle = {
        backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/image/Hover-Consulting.png'})`,
    };

    return (
        <section className="banner-section" style={backgroundStyle}>
            <div className="container-fluid position-relative h-100 time-delay">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={`banner-content ${isLoaded ? 'loaded' : ''}`}>
                            <div className="banner-heading">
                                <h1>Inspirons <br /> les gens</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className={`banner-content ${isLoaded ? 'loaded' : ''}`}>
                            <div className="banner-heading banner-heading-bottom">
                                <h1>à créer <br />de la <span>valeur</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
