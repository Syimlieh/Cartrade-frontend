import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGOUT_USER, REFRESH_TOKEN_FAIL, REFRESH_TOKEN_START, REFRESH_TOKEN_SUCCESS, REGISTER_FAIL, REGISTER_START, REGISTER_SUCCESS, SET_ERROR_EMPTY } from "./ActionsTypes";
// import axios from "../../components/api/axios";
// import axios from "axios";
import Cookies from "universal-cookie";
import axiosInstance from "../../components/api/axios";
axiosInstance.defaults.withCredentials = true

const loginStart = () => ({
    type: LOGIN_START,
})

const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: token
})
const loginFail = (error) => ({
    type: LOGIN_FAIL,
    payload: error
})
const registerStart = () => ({
    type: REGISTER_START,
})

const registerSuccess = (token) => ({
    type: REGISTER_SUCCESS,
    payload: token
})
const registerFail = (error) => ({
    type: REGISTER_FAIL,
    payload: error
})

export const logoutInitiate = () => ({
    type: LOGOUT_USER,
})
export const setErrorEmpty = () => ({
    type: SET_ERROR_EMPTY,
})

const refreshTokenStart = () => ({
  type: REFRESH_TOKEN_START,
})

const refreshTokenSuccess = (token) => ({
  type: REFRESH_TOKEN_SUCCESS,
  payload: token
})
const refreshTokenFail = (error) => ({
  type: REFRESH_TOKEN_FAIL,
  payload: error
})

export const loginInitiate = (email, password, router) => {
    return function(dispatch) {
        dispatch(loginStart())
        axiosInstance.post("/api/v1/login", {
          email,
          password
        })
        .then((response) => {
          console.log("response", response);
          dispatch(loginSuccess(response.data.token))
          router('/')
        })
        .catch((error) => {
          console.log("response", error.response);
          dispatch(loginFail(error.response));
        })
    }
}

export const registerInitiate = (name, username, email, password) => {
  return function(dispatch) {
    dispatch(registerStart())
    axiosInstance
      .post("/api/v1/register", {
        name,
        username,
        email,
        password
      })
      .then((response) => {
        console.log("response", response);
        dispatch(registerSuccess(response.data.access_token))
      })
      .catch((error) => {
        console.log("response", error.response.data)
        dispatch(registerFail(error.response.data))
      });
  }
} 

export const refreshTokenInitiate = () => {
  return function (dispatch) {
    dispatch(refreshTokenStart(""))
    axiosInstance.get("/api/v1/refreshToken", {
      withCredentials: true
     })
    .then((response) => {
      console.log(response);
      dispatch(refreshTokenSuccess(response.data))
    })
    .catch((error) => {
      console.log(error.response);
      dispatch(refreshTokenFail(error.response))
    })
  }
}

