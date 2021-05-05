import axios from 'axios'

const initialState ={
    user:[],
    isLoggedIn:true,
    isLoading:false
};

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';

// const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser=(email,password) => {
    let login = axios.post('/auth/login', {email,password}).then(res => res.data)
    return {
        type: LOGIN_USER,
        payload: login
    }
}
export const registerUser=(email,password) => {
    let register = axios.post('/auth/signUp', {email,password}).then(res => res.data)
    return {
        type: REGISTER_USER,
        payload: register
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER + '_FULFILLED':
            return {
                ...state,
              user: action.payload,
              isLoading:false
            }
        case LOGIN_USER + '_PENDING':
            return {
                ...state,
                isLoading:true
            }
        default: return state;
    }
}
