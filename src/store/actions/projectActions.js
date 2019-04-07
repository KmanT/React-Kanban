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
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', payload: project
            })
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', payload: err})
        })
        
    }
}

export const addTask = (state) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        //const project = getState().firebase.project;
        console.log(state.project);
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects')
        .doc(state.project.id)
        .update({
            tasks: firestore.FieldValue.arrayUnion({
                title: state.title,
                content: state.content,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: authorId,
                createdAt: new Date(),
                status: 0
            })
        }).then(() => {
            dispatch({type: 'ADD_TASK', payload: state})
        }).catch((err) => {
            dispatch({type: 'ADD_TASK_ERROR', payload: err})
        })
    }
}