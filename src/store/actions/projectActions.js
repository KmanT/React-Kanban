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
            dispatch({type: 'CREATE_PROJECT', payload: project
            })
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
        firestore.collection('projects')
        .doc(project.id)
        .update({
            tasks: firestore.FieldValue.arrayUnion({
                ...task,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: authorId,
                createdAt: new Date(),
                status: 0
            })
        }).then(() => {
            dispatch({type: 'ADD_TASK', payload: task})
        }).catch((err) => {
            console.log(err)
            dispatch({type: 'ADD_TASK_ERROR', err})
        })
    }
}

export const changeTaskStatus = (task) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const project = getState().project.project;

    }
}

export const deleteTask = (task) => {
    return () => {

    }
}