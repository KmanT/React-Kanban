const initState = {};

/**If you notice the spread operator '...' after state, this means it unpacks
 * the current state on refresh. When it's just a normal 'state', then it
 * returns the state to a blank object.
 */
const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('login failed');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default authReducer;