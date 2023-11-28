// Project.jsx
import PropTypes from 'prop-types';

function Project({ title, imageSrc, deployedLink, githubLink }) {
  return (
    <div className="project">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed App
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
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
