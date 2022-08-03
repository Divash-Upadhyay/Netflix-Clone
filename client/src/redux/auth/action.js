import * as types from "./actionTypes";
import Axios from "axios";
import { saveData } from "./localStorage";

const fetchSignupRequest = (payload) => {
  return {
    type: types.FETCH_SIGNUP_REQUEST,
    payload,
  };
};

const fetchSignupSuccess = (payload) => {
  return {
    type: types.FETCH_SIGNUP_SUCCESS,
    payload,
  };
};

const fetchSignupFailure = (payload) => {
  return {
    type: types.FETCH_SIGNUP_FAILURE,
    payload,
  };
};
const fetchAuthRequest = (payload) => {
  return {
    type: types.FETCH_AUTH_REQUEST,
    payload,
  };
};

const fetchAuthSuccess = (payload) => {
  return {
    type: types.FETCH_AUTH_SUCCESS,
    payload,
  };
};

const fetchAuthFailure = (payload) => {
  return {
    type: types.FETCH_AUTH_FAILURE,
    payload,
  };
};

const fetchLogoutSuccess = (payload) => {
  return {
    type: types.FETCH_LOGOUT_SUCCESS,
    payload,
  };
};

const fetchAuth = (email, password, username) => {
  return (dispatch) => {
    dispatch(fetchSignupRequest());
    Axios.post("https://netflixbackend11.herokuapp.com/api/auth/register", {
      username: username,
      email: email,
      password: password,
    })
      .then(
        (r) => saveData("isSignup", true),
        dispatch(fetchSignupSuccess(true))
      )
      .catch((e) => dispatch(fetchSignupFailure(e.data)));
  };
};

const fetchToken = (userData) => {
  const { email, password } = userData;
  return (dispatch) => {
    dispatch(fetchAuthRequest());
    Axios.post("https://netflixbackend11.herokuapp.com/api/auth/login", {
      email: email,
      password: password,
    })
      .then((r) => {
        saveData("token", r.data.accessToken),
          dispatch(fetchAuthSuccess(r.data.accessToken));
      })
      .catch((e) => dispatch(fetchAuthFailure(e.data)));
  };
};

const logoutSucess = (dispatch) => {
  dispatch(fetchLogoutSuccess());
};
export { fetchAuth, fetchToken, logoutSucess };
