import axios from 'axios'

const initialState ={
    user:{},
    isLoggedIn:false
};

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
// const LOGOUT_USER = 'LOGOUT_USER';

export function loginUser(loggedInUser) {
    console.log("hit 1")
    return {
        type: LOGIN_USER,
        payload: loggedInUser
    }
}
export const registerUser=(email,password) => {
    let login = axios.post('/auth/signUp', {email,password}).then(res => res.data)
    return {
        type: REGISTER_USER,
        payload: login
    }
}

export default function reducer(state = initialState, action) {
    console.log("hit 2")
    console.log(action)
    switch(action.type) {
        case LOGIN_USER:
            console.log("hit 4")
            return {
                ...state,
              user: action.payload.data,
              isLoggedIn: true
            }
      
        default: return state;
    }
}
