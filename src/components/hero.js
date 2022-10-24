 import React from 'react';
 import HeroImage from '../images/hero.png'
  function Hero(){
    return(
        <div className="hero-section">
            <div className="hero-image">
                <img src={HeroImage} />
            </div>
            <div className="hero-text">
                <h1 id="hero-heading"> Online Experiences</h1>
                <p id="hero-desc">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
  }

  export default Hero