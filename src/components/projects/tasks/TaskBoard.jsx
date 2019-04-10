import React, { Component } from 'react';
/**Look at ProjectList for a hint on what needs to be done. */
class TaskBoard extends Component {
  render() {
    const { project } = this.props;
    return <div className="container section row" id="task-table">
      <div className="col s4" id="todo">
        <div className="row"><span class="flow-text">TODO</span></div>
        {/**Add function to print tasks with a status of "0" Include a button
            That increases the state by one */}
      </div>
      <div className="col s4" id="wip">
        <div className="row"><span class="flow-text">WIP</span></div>
        {/**Add function to print tasks with a status of "1" Include a button
            That increases the state by one */}
      </div>
      <div className="col s4" id="done">
        <div className="row"><span class="flow-text">DONE</span></div>
        {/**Add function to print tasks with a status of "2" No need for btn*/}
      </div>
    </div>
  }
}

export default TaskBoard;