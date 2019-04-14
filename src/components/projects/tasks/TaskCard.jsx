import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { changeTaskStatus } from '../../../store/actions/projectActions';

class TaskCard extends Component {

  handleClick = (task) => {
    const newStatus = task.status + 1;
    this.props.changeTaskStatus(task, newStatus);
  }

  render() {
    const { task } = this.props;
    const { projectId } = this.props;
    if (task.status >= 2) {
        return <div className="row card-panel">
            <p>{task.title}</p>
            <p>{task.content}</p>
        </div>
    } else {
        return <div className="row card-panel">
            <p>{task.title}</p>
            <p>{task.content}</p>
            <button 
              className="btn pink lighten-1 z-depth-0"
              onClick={this.handleClick.bind(projectId, task)}
            >
              Next Phase
            </button>
        </div>
    }
     
  }
}

const mapStateToProps = (state) => {
  //const project = props.location.state.project;
  return {
      project: state.project,
      auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    changeTaskStatus: (task, newStatus) => dispatch(changeTaskStatus(task, newStatus))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{collection: 'projects'}])
)(TaskCard);
