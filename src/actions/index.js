import axios from 'axios';

export const LOGIN = "login";
export const FETCH_USER = "fetch_user";
export const ADD_RECORD = "add_record";
export const LOAD_TOKEN_FROM_STORAGE = "load_token_from_storage";

const ROOT_URL = 'https://tk-records.herokuapp.com/api';
const LOGIN_URL = `${ROOT_URL}/login`;
const RECORDS_URL = `${ROOT_URL}/records`;

export function login(values, callBack) {
  const request = axios.post(LOGIN_URL, values);

  const tokenInterceptor = function(repsonse) {
    const {result, token} = repsonse.data;
    if (result) {
      localStorage.setItem("token", token);
      localStorage.setItem("token_added_time", Date.now());
      axios.defaults.headers.common['x-access-token'] = token;
    }

    return new Promise(function(resolve, reject){
      resolve(repsonse);
    });
  };

  return {
    type: LOGIN,
    payload: request.then(tokenInterceptor)
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
  }

  return {
    type: LOAD_TOKEN_FROM_STORAGE,
    payload: null
  };
}

export function addRecord(values) {
  const request = axios.post(RECORDS_URL, values);
  return {
    type: ADD_RECORD,
    payload: request
  }
}
