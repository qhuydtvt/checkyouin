import axios from 'axios';

export const LOGIN = "login";
export const FETCH_USER = "fetch_user";
export const LOAD_TOKEN_FROM_STORAGE = "load_token_from_storage";

const ROOT_URL = 'https://tk-records.herokuapp.com/api';
const LOGIN_URL = `${ROOT_URL}/login`;

export function login(values, callBack) {
  const request = axios.post(LOGIN_URL, values).then(res => {
    const  {result, token} = res;
    if (result) {
      localStorage.setItem("token", token);
      localStorage.setTime("token_added_time", Date.now());
    }
    return res;
  });
  return {
    type: LOGIN,
    payload: request
  };
}

export function fetchCurrentUser() {
  const request = axios.get(LOGIN_URL);
  return {
    type: FETCH_USER,
    payload: request
  };
}

export function loadTokenFromStorage() {
  const token = localStorage.getItem("token");
  if (token) {
    const tokenAddedTime = localStorage.getItem("token_added_time");
    const dayPassed = token ? ((Date.now() - tokenAddedTime) / 86400000) : -1;
    if (dayPassed <= 7) {
      axios.defaults.headers.common['x-access-token'] = token;
      return {
        type: LOAD_TOKEN_FROM_STORAGE,
        payload: token
      };
    }

    return {
      type: LOAD_TOKEN_FROM_STORAGE,
      payload: null
    };
  }
}
