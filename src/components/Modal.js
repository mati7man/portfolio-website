import React from 'react';

function Modal({ isOpen, onClose, project }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => onClose()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <span>×</span>
        </button>
        
        <div className="modal-header">
          <h2>{project.title}</h2>
          <div className="project-info">
            <span className="company">{project.company}</span>
            <span className="dot"></span>
            <span className="role">{project.role}</span>
            <span className="dot"></span>
            <span className="year">{project.year}</span>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-image">
            <img src={project.image} alt={project.title} />
          </div>
          
          <div className="modal-details">
            <p className="project-description">
              {project.longDescription || project.description}
            </p>
            
            <div className="modal-tags-container">
              <ul className="technologies">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              
              <div className="modal-actions">
                <a href={project.liveLink} className="btn" target="_blank" rel="noopener noreferrer">
                  See live <i className="fas fa-external-link-alt"></i>
                </a>
                <a href={project.sourceLink} className="btn" target="_blank" rel="noopener noreferrer">
                  See source <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal; 