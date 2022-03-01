import React from "react";
import ReactMarkdown from "react-markdown";
import { Consumer } from "../context";

function ProjectPage(props) {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        const id = props.match.params.id;
        const project = projects.filter((project)=> project.id == id)[0];
        const { imageUrl, title, body } = project;
        return (
          <div className="container my-5 py-5 markdown">
            <div className="justify-content-center">
              <img src={imageUrl} alt={title} className="w-100" />
            </div>
            <h1 className="font-weight-light text-center my-5">{title}</h1>
            {/* <ReactMarkdown source={body} /> */}
          </div>
        );
      }}
    </Consumer>
  );
}
export default ProjectPage;
