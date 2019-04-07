import React from 'react';

const ProjectSummary = ({project}) => {
    return <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>Posted by Kyle Turske</p>
            <p className="grey-text">{project.content}</p>
        </div>
    </div>
}

export default ProjectSummary;