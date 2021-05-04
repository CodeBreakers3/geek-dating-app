//initial state
const initialState = {
    isLoggedIn: false
}

//action types
const LOGIN = 'LOGIN';

//action creators (functions)
export function login() {
    return {
        type: LOGIN
    }
}

//reducer function
export default function reducer(state=initialState, action) {
    switch(action) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true
            }
        default: 
            return state;
    }
}