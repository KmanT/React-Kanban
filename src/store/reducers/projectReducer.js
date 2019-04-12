const initState = {};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action.payload)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.payload)
            return state;
        case 'OPEN_PROJECT':
            console.log('project opened', action.payload)
            return {
                ...state,
                project: action.payload
            };
        case 'ADD_TASK':
            console.log('task added');
            return {
                project: {
                    ...state.project,
                    tasks: state.project.tasks.concat(action.payload)
                }
            };
        case 'ADD_TASK_ERROR':
            console.log('task creation error');
            return state;
        default:
            return state;
    }
}

export default projectReducer;