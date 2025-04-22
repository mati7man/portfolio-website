import React from 'react';
import placeholder from '../assets/placeholder.svg';

function Hero() {
  return (
    <section className="hero" id="hero" style={{
      backgroundImage: `url(${placeholder})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="hero-content">
        <h1>I'm Alexandra.<br />Glad to see you!</h1>
        <p>
          I'm a software developer! I can help you build a product, feature or website
          Look through some of my work and experience! If you like what you see and have a
          project you need coded, don't hesitate to contact me.
        </p>
        <div className="connect">
          <h3>LET'S CONNECT</h3>
          <div className="social-icons">
            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Victory"><i className="fas fa-hand-peace"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Medium"><i className="fab fa-medium-m"></i></a>
          </div>
        </div>
        <a href="#" className="btn">Get my resume</a>
      </div>
    </section>
  );
}

export default Hero; 