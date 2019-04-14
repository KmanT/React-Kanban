import React, { Component } from 'react';
import TaskCard from './TaskCard';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

/**Look at ProjectList for a hint on what needs to be done. */
class TaskBoard extends Component {
  
  render() {
    const { project } = this.props;
    console.log(project);
    return <div className="container section row" id="task-table">
      <div className="col s4" id="todo">
        <div className="row center-align"><span className="flow-text">TODO</span></div>
        {/**Add function to print tasks with a status of "0" Include a button
            That increases the state by one */
            project.sortedTasks.todo.map(task => {
              return <TaskCard 
                task={task} 
                index={task.index}
                projectId={task.projectId}
              />
            })
        }

      </div>
      <div className="col s4" id="wip">
        <div className="row center-align"><span className="flow-text">WIP</span></div>
        {/**Add function to print tasks with a status of "1" Include a button
            That increases the state by one */
            project.sortedTasks.wip.map(task => {
              return <TaskCard 
                task={task}
                index={task.index}
                projectId={task.projectId}
              />
            })
        }
      </div>
      <div className="col s4" id="done">
        <div className="row center-align"><span className="flow-text">DONE</span></div>
        {/**Add function to print tasks with a status of "2" No need for btn*/
          project.sortedTasks.done.map(task => {
            return <TaskCard
              task={task}
              index={task.index}
              projectId={task.projectId}
            />
          })
        }
      </div>
    </div>
  }
}

const createTaskListByType= (statusNum, project) => {
  //return project.tasks.filter(task => task.status === statusNum);
  var i = 0;
  var taskArr = [];
  var projectId = project.id;
  console.log(project);
  project.tasks.forEach((task) => {
    if (task.status === statusNum) {
      taskArr.push({
        ...task,
        index: i,
        projectId: projectId
      })
    }
    i++;
  })
  console.log(taskArr);
  return taskArr;
}

const mapStateToProps = (state, ownProps) => {
  const { project } = ownProps;
  return {
    project: {
      ...ownProps,
      sortedTasks: {
        todo: createTaskListByType(0, project),
        wip: createTaskListByType(1, project),
        done: createTaskListByType(2, project)
      }
    }

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{collection: 'projects'}])
)(TaskBoard);