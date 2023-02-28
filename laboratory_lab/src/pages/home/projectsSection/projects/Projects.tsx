import Project from "../project/Project";

const Projects = () => {
  return (
    <section>
      <div className="wrapper projects">
        <h2 className="projects__title"> Projekty </h2>
        <div className="projects__container">
          <Project title={["Pochodne", "graminy"]} />
          <Project title={["Pochodne", "kofeiny"]} />
          <Project title={["Pochodne", "nikotyny"]} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
