export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make asnc call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date(),
            tasks: []
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', payload: project})
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', payload: err})
        })
        
    }
}

export const openProject = (project) => {
    return (dispatch) => {
        dispatch({type: 'OPEN_PROJECT', payload: project});
    }
}

export const deleteProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
    }
}

export const addTask = (task) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const project = getState().project.project;
        console.log(task);
        const authorId = getState().firebase.auth.uid;
        const newTask = {
            ...task,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date(),
            status: 0
        }

        firestore.collection('projects')
        .doc(project.id)
        .update({
            tasks: firestore.FieldValue.arrayUnion({ ...newTask })
        }).then(() => {
            dispatch({type: 'ADD_TASK', payload: newTask})
        }).catch((err) => {
            console.log(err)
            dispatch({type: 'ADD_TASK_ERROR', err})
        })
    }
}

export const changeTaskStatus = (task, newStatus) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const project = getState().project.project;

        console.log(newStatus);
        const newTask = {
            authorFirstName: task.authorFirstName,
            authorId: task.authorId,
            authorLastName: task.authorLastName,
            content: task.content,
            createdAt: task.createdAt,
            status: newStatus,
            title: task.title
        }
        console.log('new task: ' + newTask);
        const taskList = project.tasks.slice();
        console.log('current task list: ' + taskList)
        taskList.splice(task.index, 1, newTask);
        console.log('new task list:' + taskList);
        firestore.collection('projects')
        .doc(project.id)
        .set({
            ...project,
            tasks: taskList
        }).then(() => {
            dispatch({type: 'UPDATE_TASK', payload: taskList})
        }).catch((err) => {
            console.log(err)
            dispatch({type: 'UPDATE_TASK_ERROR', err})
        })


    }
}

export const deleteTask = (task, projectId) => {
    return () => {

    }
}