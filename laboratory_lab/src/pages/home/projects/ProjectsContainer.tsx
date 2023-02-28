import React from "react";
import ProjectContainer from "./projectContainer/ProjectContainer";

const ProjectsContainers = () => {
  return (
    <section>
      <div className="wrapper projects">
        <h2 className="projects__title"> Projekty </h2>
        <div className="projects__container">
          <ProjectContainer title={["Pochodne", "graminy"]} />
          <ProjectContainer title={["Pochodne", "kofeiny"]} />
          <ProjectContainer title={["Pochodne", "nikotyny"]} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsContainers;
