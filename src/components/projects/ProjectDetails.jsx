import React from 'react';
import AddTask from './tasks/AddTask';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />;

  if (project) {
    return <div className="container section project-details">
        <div className="card z-depth-0">
            <span className="card-title">{project.title}</span>
            <p>{ project.content }</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <div>Posted by: {project.authorFirstName} {project.authorLastName}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
        </div>
        <AddTask project={project}/>
    </div>
  }
    return <div/>
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{collection: 'projects'}])
)(ProjectDetails)
