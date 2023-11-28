import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      title: "Europe in Your Pocket",
      imageSrc: "/EuropePocketPicture.png",
      deployedLink: "https://crcarmen23.github.io/europe-in-your-pocket/",
      githubLink: "https://github.com/conorreed/europe-in-your-pocket",
    },
    {
      title: "Weather Dashboard",
      imageSrc: "/WeatherDashboardPicture.png",
      deployedLink: "https://conorreed.github.io/Weather-Dashboard/",
      githubLink: "https://github.com/conorreed/Weather-Dashboard",
    },
    {
      title: "Work Day Planner",
      imageSrc: "/WorkDayPlannerPicture.png",
      deployedLink: "https://conorreed.github.io/work-day-planner/",
      githubLink: "https://github.com/conorreed/work-day-planner",
    },
    {
      title: "Password Generator",
      imageSrc: "/PasswordGeneratorPicture.png",
      deployedLink: "https://conorreed.github.io/Password-Generator/",
      githubLink: "https://github.com/conorreed/Password-Generator",
    },
    {
      title: "SVG Logo Generator",
      imageSrc: "/SVGLogoGeneratorPicture.png",
      deployedLink: "https://youtu.be/maO6HRFl980",
      githubLink: "https://github.com/conorreed/SVG-Logo-Generator",
    },
    {
      title: "Note Taker App",
      imageSrc: "/NoteTakerAppPicture.png",
      deployedLink: "https://secret-waters-66437-1e6b11615e1a.herokuapp.com/",
      githubLink: "https://github.com/conorreed/Note-Taker-App",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="display-4">Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;