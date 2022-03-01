import React from "react";
import ProjectCard from "./ProjectCard";
import { Consumer } from "../context";

function Projects() {
  return(
  <Consumer>
    {(value)=>{
      const {projects} = value;
      return (
        <div className="container text-center my-5">
          <h1 className="font-weight-light">
            My<span className="text-info">Projects</span>
          </h1>
          <div className="lead">I build products. Just like this website</div>
          <div className="row my-5 pt-5">
            {projects.slice(0,3).map((project) => (
              <div key={project.id} className="col-12 col-md-4 my-2">
                <ProjectCard project = {project}/>
              </div>
            ))}
            </div>
            <div className="my-5">
              <a href="/all-projects" className="text-dark text-right">
                <h5>
                  See my projects
                  <i className="fas fa-arrow-right align-middle" />
                </h5>
              </a>
            </div>
          </div>
      );
    }}
  </Consumer>
  ); 
}
export default Projects;
