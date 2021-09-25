import React from "react";
import "./Projects.scss";
import Talk from "../../components/Talk/Index";
import * as conversation from "../../content/conversation.json";
import ProjectDescription from "../../components/Project/index";
import * as projectData from "../../content/projects.json";
import { Link } from "react-scroll";

const Projects = () => {
  return (
    <div>
      <Talk
        message={conversation.converation[0].project}
        xOffset="73%"
        yOffset="25%"
      />
      <div className="project">
        <div className="project__page">
          <div className="project__holder">
            {projectData.project__data.map((data, index) => {
              return (
                <ProjectDescription
                  key={index}
                  name={data.name}
                  image={data.image}
                  link={data.github__link}
                  desc={data.description}
                  bullets={data.bullets}
                  stack={data.stack}
                  github__link={data.github__link}
                  star__link={data.star__link}
                  id={data.name}
                />
              );
            })}
          </div>
        </div>
        <div className="project__nav">
          {projectData.project__data.map((data, index) => {
            return (
              <div className="project__nav__element">
                <Link
                  activeClass="active"
                  to={data.name}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <h1> P.{index} </h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
