import Project from './Project'; 

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      imageSrc: '/project1.jpg',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/example/project1',
    },
    // Add more projects as needed
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;