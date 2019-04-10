import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
import { addTask } from '../../../store/actions/projectActions';
//import { compose } from 'redux';


class AddTask extends Component { 
    state = {
        title: "",
        content: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //const { project } = this.props.location.state;
        this.props.addTask(this.state)
        //this.props.history.push('/'); //Redirect to project details
    }

    render() {
    const { project } = this.props;
    return <div className="container section project-details">
        <form onSubmit={this.handleSubmit} className="white">
            <h5>Add new task</h5>
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="content">Description</label>
                <input type="text" id="content" onChange={this.handleChange}/>
            </div>
            
            <button className="btn-floating btn-large waves-effect waves-light pink">
                <i className="material-icons">add</i>
            </button>
        </form>
        

    </div>
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
        addTask: (task, projectId) => dispatch(addTask(task, projectId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
