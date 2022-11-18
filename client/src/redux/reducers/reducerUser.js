

import { GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS } from "../actionTypes/actionTypeUser";


const init = {
    user: null,
    error: null,
    loading: false,
    token: localStorage.getItem("token"),
    isAuth: false,
  };
  
// type et payload => apartir :action.js
  export const userReducer = (state = init, { type, payload }) => {
    switch (type) {
      case SIGN_UP:
        case LOGIN:
          case GET_PROFILE:
      
         
        return {
          ...state,
          loading: true,
        };
      case SIGN_UP_FAIL:
        case LOGIN_FAIL:
          case GET_PROFILE_FAIL:
 
         
        return {
          ...state,
          loading: false,
          error: payload,
        };
      case SIGN_UP_SUCCESS:
        return {
          ...state,
          loading: false,
          user: payload,
          error: null,
        };

        case LOGIN_SUCCESS:
          return {
            ...state,
            loading: false,
            error: null,
            user: payload.user,
            token: payload.token,
            isAuth: true,
          };
     
          case GET_PROFILE_SUCCESS:
            return{
                ...state,loading:false,error:null,user:payload
            }
  
      default:
        return state;
    }
  };
  
