import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    
    return <div className="project-list section">
        { projects && projects.map(project => {
            let projectLink = '/project/' + project.id;
            return <Link to={{
                pathname: projectLink,
                state : {
                    project: project
                }
            }}>
                <ProjectSummary project={project} key={project.id} content={project.content}/>
            </Link>
        })}
        
    </div>
}

export default ProjectList;