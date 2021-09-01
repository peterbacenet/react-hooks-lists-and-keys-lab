import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const singleProj = projects.map((proj)=> {
    console.log(proj)
    return ( <ProjectItem key={proj.id} name={proj.name} about={proj.about} technologies={proj.technologies} /> )})
  console.log(singleProj);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {singleProj}
      </div>
    </div>
  );
}

export default ProjectList;
