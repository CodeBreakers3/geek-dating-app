import axios from "axios";

const initialState = {
  profiles: [],
  matches: [],
  matchedChat: [],
  isLoading: false
};


const GET_MATCHES = "GET_MATCHES";
const GET_PROFILES = "GET_PROFILES";
const GET_MATCHED_CHAT = "GET_MATCHED_CHAT";

export const getMatches = (profile_id) => {
  let matches = axios.get(`/api/matches/${profile_id}`).then((res) => res.data);
  return {
    type: GET_MATCHES,
    payload: matches
  };
};
export const getProfiles = (profile_id) => {
  let profiles = axios.get(`/api/viewableprofiles/${profile_id}`).then(res => res.data);
  return {
    type: GET_PROFILES,
    payload: profiles
  };
};
export const getMatchedChat = (match_id) => {
  let chat = axios.get(`/api/matchedchat/${match_id}`).then((res) => res.data);
  return {
    type: GET_MATCHED_CHAT,
    payload: chat
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

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

    case GET_PROFILES + "_FULFILLED":
      return {
        ...state,
        profiles: action.payload,
        isLoading: false,
      };

    case GET_PROFILES + "_PENDING":
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
