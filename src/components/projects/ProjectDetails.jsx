import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return <div className="container section project-details">
        <div className="card z-depth-0">
            <span className="card-title">{project.title}</span>
            <p>{ project.content }</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <div>Posted by: Kyle</div>
            <div>April 4th, 8pm</div>
        </div>
    </div>
  }
    return <div></div> 
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetails)
