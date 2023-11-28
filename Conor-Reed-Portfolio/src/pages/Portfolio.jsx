import Project from "./Project";

function Portfolio() {
  const projects = [
    {
      title: "Europe in Your Pocket",
      imageSrc: "/project1.jpg",
      deployedLink: "https://crcarmen23.github.io/europe-in-your-pocket/",
      githubLink: "https://github.com/conorreed/europe-in-your-pocket",
    },
    {
      title: "Weather Dashboard",
      imageSrc: "/project1.jpg",
      deployedLink: "https://conorreed.github.io/Weather-Dashboard/",
      githubLink: "https://github.com/conorreed/Weather-Dashboard",
    },
    {
      title: "Work Day Planner",
      imageSrc: "/project1.jpg",
      deployedLink: "https://conorreed.github.io/work-day-planner/",
      githubLink: "https://github.com/conorreed/work-day-planner",
    },
    {
      title: "Password Generator",
      imageSrc: "/project1.jpg",
      deployedLink: "https://conorreed.github.io/Password-Generator/",
      githubLink: "https://github.com/conorreed/Password-Generator",
    },
    {
      title: "SVG Logo Generator",
      imageSrc: "/project1.jpg",
      deployedLink: "https://youtu.be/maO6HRFl980",
      githubLink: "https://github.com/conorreed/SVG-Logo-Generator",
    },
    {
      title: "Note Taker App",
      imageSrc: "/project1.jpg",
      deployedLink: "https://example.com/project1",
      githubLink: "https://github.com/example/project1",
    },
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
