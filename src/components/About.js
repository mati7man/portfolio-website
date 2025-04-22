import React, { useState } from 'react';

function About() {
  const [languagesOpen, setLanguagesOpen] = useState(true);
  const [frameworksOpen, setFrameworksOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);

  const languages = [
    { name: 'JavaScript', icon: '/placeholder.svg' },
    { name: 'HTML', icon: '/placeholder.svg' },
    { name: 'CSS', icon: '/placeholder.svg' }
  ];

  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Myself</h2>
        <p>
          Hello I'm a software developer! I can help you build a product, feature or website
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
      
      <div className="skills">
        <div className="skill-category">
          <div 
            className="category-header" 
            onClick={() => setLanguagesOpen(!languagesOpen)}
          >
            <h3>Languages</h3>
            <span className={`arrow ${languagesOpen ? 'up' : 'down'}`}></span>
          </div>
          {languagesOpen && (
            <ul className="language-list">
              {languages.map((lang, index) => (
                <li key={index} className="language-item">
                  <img src={lang.icon || "/placeholder.svg"} alt={lang.name} />
                  <span>{lang.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="skill-category">
          <div 
            className="category-header" 
            onClick={() => setFrameworksOpen(!frameworksOpen)}
          >
            <h3>Frameworks</h3>
            <span className={`arrow ${frameworksOpen ? 'up' : 'down'}`}></span>
          </div>
          {frameworksOpen && (
            <ul className="frameworks-list">
              {/* Framework items would go here */}
            </ul>
          )}
        </div>
        
        <div className="skill-category">
          <div 
            className="category-header" 
            onClick={() => setSkillsOpen(!skillsOpen)}
          >
            <h3>Skills</h3>
            <span className={`arrow ${skillsOpen ? 'up' : 'down'}`}></span>
          </div>
          {skillsOpen && (
            <ul className="skills-list">
              {/* Skills items would go here */}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default About; 