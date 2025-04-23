import React, { useState } from 'react';
import Modal from './Modal';

function ProjectCard({ project, reverse }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className={`project-card ${reverse ? 'reverse' : ''}`} onClick={openModal} style={{ cursor: 'pointer' }}>
        <div className="project-image">
          <img src={project.image || "/placeholder.svg"} alt={project.title} />
        </div>
        <div className="project-content">
          <h2>{project.title}</h2>
          <div className="project-info">
            <span className="company">{project.company}</span>
            <span className="dot"></span>
            <span className="role">{project.role}</span>
            <span className="dot"></span>
            <span className="year">{project.year}</span>
          </div>
          <p className="project-description">{project.description}</p>
          <ul className="technologies">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <a href="#" className="btn" onClick={e => e.preventDefault()}>See project</a>
        </div>
      </div>

      <Modal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        project={project} 
      />
    </>
  );
}

export default ProjectCard; 