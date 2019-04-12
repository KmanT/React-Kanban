import React, { Component } from 'react'

export default class TaskCard extends Component {
  render() {
    const { task } = this.props;
    if (task.status >= 2) {
        return <div className="row card-panel">
            <p>{task.title}</p>
            <p>{task.content}</p>
        </div>
    } else {
        return <div className="row card-panel">
            <p>{task.title}</p>
            <p>{task.content}</p>
            <button className="btn pink lighten-1 z-depth-0">Next Phase</button>
        </div>
    }
    
  }
}
