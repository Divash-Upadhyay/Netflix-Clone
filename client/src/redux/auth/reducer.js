import * as types from "./actionTypes";
const initialState = {
  isSignUp: false,
  token: null,
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignUp: payload,
        loading: false,
        error: "",
      };
    case types.FETCH_SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case types.FETCH_AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_AUTH_SUCCESS:
      return {
        ...state,
        token: payload,
        loading: false,
        error: "",
      };
    case types.FETCH_AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case types.FETCH_LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
