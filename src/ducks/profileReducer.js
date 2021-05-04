import axios from 'axios'

const initialState ={
viewableProfiles:[],
profilesLiked:[],
isLoading:false
};

const GET_VIEWABLE_PROFILES ='GET_VIEWABLE_PROFILES'

// const LOGOUT_USER = 'LOGOUT_USER';

export const getViewableProfiles=(email,password) => {
    let login = axios.post('***').then(res => res.data)
    return {
        type: GET_VIEWABLE_PROFILES,
        payload: login
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_VIEWABLE_PROFILES + '_FULFILLED':
            return {
                ...state,
              viewableProfiles: action.payload,
              isLoading:false
            }
        case GET_VIEWABLE_PROFILES + '_PENDING':
            return {
                ...state,
                isLoading:true
            }
        default: return state;
    }
}
