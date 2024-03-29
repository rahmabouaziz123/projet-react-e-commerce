
import axios from "axios";
import { BLOKINGUSER, GET_ALL_USER, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS, USER_LOGOUT } from "../actionTypes/actionTypeUser";



export const userSignUp = (newUser) => async (dispatch) => {
    dispatch({ type: SIGN_UP });
    try {
      const res = await axios.post("/user/signUp", newUser);
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: res.data,
       
      });
      console.log(res.data)
    } catch (error) {
      dispatch({
        type: SIGN_UP_FAIL,
        payload: error.response.data,
      });
    }
  };


  export const userLogin = (user) => async (dispatch) => {
    dispatch({
      type: LOGIN,
    });
    try {
      const res = await axios.post("/user/signIn", user);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data,
      });
    }
  };




  export const getUserProfile=()=>async(dispatch)=>{
    dispatch({
        type:GET_PROFILE
    })
    const token=localStorage.getItem("token");
    const config={
        headers:{
            Authorization:token
        }
    }
    try {
        const res=await axios.get("/user/auth",config)
        dispatch({
            type:GET_PROFILE_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:GET_PROFILE_FAIL,
            payload: error.response.data,
        })
    }
}


///////////logout
export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: USER_LOGOUT });
};




/////////////////////////////////
//get all users
export const getAllusers = () => async(dispatch) => {
  try {
    const res = await axios.get("/user/getAllUser");
    dispatch (
      {
      type : GET_ALL_USER ,
      payload : res.data
      }
    );
  } catch (error) {
    alert("get all users error")
  }
};


/////////////// edit user

export const editeUser = (user) => async(dispatch) => {
  try {
      const res = await axios.put(`/user/updateUser/${user._id}`, user);
      dispatch(
          {
              type : BLOKINGUSER,
              payload : res.data
          }
      )
  } catch (error) {
      alert("update User error");
  }
};