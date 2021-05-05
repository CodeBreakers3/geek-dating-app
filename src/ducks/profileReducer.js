import axios from 'axios'

const initialState ={
viewableProfiles:[],
profilesLiked:[],
isLoading:false
};

const GET_VIEWABLE_PROFILES ='GET_VIEWABLE_PROFILES'

// const LOGOUT_USER = 'LOGOUT_USER';

export const getViewableProfiles=(profile_id) => {
    
    return {
        type: GET_VIEWABLE_PROFILES,
        payload: axios.get(`/api/getviewableprofiles/${profile_id}`)
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
