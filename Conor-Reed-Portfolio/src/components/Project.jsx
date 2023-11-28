// Project.jsx
import PropTypes from 'prop-types';

function Project({ title, imageSrc, deployedLink, githubLink }) {
  return (
    <div className="project card">
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="project-links">
          <a href={deployedLink} className="btn btn-primary mr-2" target="_blank" rel="noopener noreferrer">
            Deployed App
          </a>
          <a href={githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

// Prop types validation
Project.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;
