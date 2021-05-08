import axios from 'axios'

const initialState ={
    user:{},
sessionUser:{},
    isLoggedIn:false,
    isLoading:false
};

const RELOAD_USER = 'REGISTER_USER';
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export function reloadUser() {
    let session= axios.get('/auth/reload').then(res =>console.log(res.data))
    console.log(session)
    return {
        type: LOGIN_USER,
        payload: session
    }
}
export function loginUser(loggedInUser) {
    return {
        type: LOGIN_USER,
        payload: loggedInUser
    }
}
export const registerUser=(email,password) => {
    let register = axios.post('/auth/signUp', {email,password}).then(res => res.data)
    return {
        type: REGISTER_USER,
        payload: register
    }
}

export const logoutUser=()=>{
    return {
        type: LOGOUT_USER,
        payload: axios.delete('/auth/logout')
    }
}

export default function reducer(state = initialState, action) {
    
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
              user: action.payload,
              isLoggedIn: true
            }
        case RELOAD_USER:
            return {
                ...state,
              sessionUser: action.payload,
              isLoggedIn: true
            }
        case LOGOUT_USER + "_PENDING":
            return {
                ...state,
                isLoading: true
            }
        case LOGOUT_USER + "_FULFILLED":
            return {
                ...state,
                user: {},
                isLoading: false,
                isLoggedIn: false
            }
            
        default: return state;
    }
}
