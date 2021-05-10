import React from "react"
import './Projects.scss'
import Talk from '../../components/Talk/Index'
import * as conversation from "../../content/conversation.json"
import ProjectDescription from "../../components/Project/index"
import * as projectData from "../../content/projects.json"

const Projects = () => {
    return (
        <div className="project__page">
            <div className="project__holder">
                {projectData.project__data.map((data, index)=> {
                    return (<ProjectDescription name={data.name} image={data.image} link={data.github__link} desc={data.description} stack={data.stack} />);
                })}
            </div>
            <div className="project__nav">
                    <div className="project__nav__element">
                        <h1>P.1</h1>
                    </div>
                    <div className="project__nav__element">
                        <h1>P.2</h1>
                    </div>
                    <div className="project__nav__element">
                        <h1>P.3</h1>
                    </div>
                    <div className="project__nav__element">
                        <h1>P.4</h1>
                    </div>
                    <div className="project__nav__element">
                        <h1>P.5</h1>
                    </div>
                </div>
        </div>
    )
}

export default Projects;