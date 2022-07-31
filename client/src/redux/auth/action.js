import * as types from "./actionTypes";
import Axios from "axios";
import { useNavigate } from "react-router";

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

const fetchAuth = (email, password, username) => {
  return (dispatch) => {
    dispatch(fetchSignupRequest());
    Axios.post("http://localhost:8080/api/auth/register", {
      username: username,
      email: email,
      password: password,
    })
      .then((r) => dispatch(fetchSignupSuccess(true)))
      .catch((e) => dispatch(fetchSignupFailure(e.data)));
  };
};

const fetchToken = (userData) => {
  const { email, password } = userData;
  return (dispatch) => {
    dispatch(fetchAuthRequest());
    Axios.post("http://localhost:8080/api/auth/login", {
      email: email,
      password: password,
    })
      .then((r) => dispatch(fetchAuthSuccess(r.data.accessToken)))
      .catch((e) => dispatch(fetchAuthFailure(e.data)));
  };
};
export { fetchAuth, fetchToken };
