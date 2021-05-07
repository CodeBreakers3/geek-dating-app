import axios from "axios";

const initialState = {
  viewableProfiles: [],
  profilesLiked: [],
  isLoading: false,
  matches: [],
  matchedChat: [],
};

const GET_VIEWABLE_PROFILES = "GET_VIEWABLE_PROFILES";
const GET_MATCHES = "GET_MATCHES";
const GET_MATCHED_CHAT = "GET_MATCHED_CHAT";

// const LOGOUT_USER = 'LOGOUT_USER';

export const getViewableProfiles = (profile_id) => {
  return {
    type: GET_VIEWABLE_PROFILES,
    payload: axios.get(`/api/getviewableprofiles/${profile_id}`)
  };
};

export const getMatches = (profile_id) => {
  let matches = axios.get(`/api/matches/${profile_id}`).then(res => res.data)
    return {
    type: GET_MATCHES,
    payload: matches
  };
};

export const getMatchedChat = (match_id) => {
  let chat = axios.get(`/api/matchedchat/${match_id}`).then(res=> res.data)
  return {
    type: GET_MATCHED_CHAT,
    payload: chat
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIEWABLE_PROFILES + "_FULFILLED":
      return {
        ...state,
        viewableProfiles: action.payload,
        isLoading: false,
      };
    case GET_VIEWABLE_PROFILES + "_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case GET_MATCHES + "_FULFILLED":
      return {
        ...state,
        matches: action.payload,
        isLoading: false,
      };
    case GET_MATCHES + "_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case GET_MATCHED_CHAT + "_FULFILLED":
      return {
        ...state,
        matchedChat: action.payload,
        isLoading: false,
      };
    case GET_MATCHED_CHAT + "_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
