import React, { Component } from 'react';
import ProjectSummary from './ProjectSummary';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openProject } from '../../store/actions/projectActions';
import history from '../../history';

class ProjectList extends Component {
    handleClick = (link, project) => {
        this.props.openProject(project);
        history.push(link);
    }

    render() {
        const { projects } = this.props;
        return <div className="project-list section">
            <ul>
            { projects && projects.map(project => {
                let projectLink = '/project/' + project.id;
                return <li key={project.id} onClick={this.handleClick.bind(null, projectLink, project)}>
                    <ProjectSummary project={project} key={project.id} content={project.content}/>
                </li>
            })}
            </ul>            
        </div>
    }
    
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openProject: (project) => dispatch(openProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);