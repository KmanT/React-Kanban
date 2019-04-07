const initState = {
    projects: [
        {id: '1', title: 'Finish 443 Project', content: 'Work with team actually get this shit done'},
        {id: '2', title: 'Finish 371 Project', content: 'Work with team to contribute'},
        {id: '3', title: 'Finish Personal Branding Paper', content: 'Create a paper based on myself and the concepts of marketing over the course of the semester'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action.payload)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.payload)
            return state;
        default:
            return state;
    }
}

export default projectReducer;