import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  };
};
export const loginFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err
  };
};
