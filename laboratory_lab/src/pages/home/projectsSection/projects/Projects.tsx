import Project from "../project/Project";

const Projects = () => {
  const projects = [
    ["Pochodne", "graminy"],
    ["Pochodne", "kofeiny"],
    ["Pochodne", "nikotyny"],
  ];
  return (
    <section>
      <div className="wrapper projects">
        <h2 className="projects__title"> Projekty </h2>
        <div className="projects__container">
          {projects.map(project => {
            return <Project key={project[1]} title={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
