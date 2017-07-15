import axios from 'axios';

export const SEARCH_INSTRUCTOR = "search_instructors";
export const LOGIN = "login";

const API_ROOT = 'https://script.google.com/macros/s/AKfycbxMRxd-cZdPmaEP7StW6KD_0le4t_DUugu8SpQKIglM3GHnKh7K/exec'
const COMMAND_SEARCH = "?command=search"

const ROOT_URL = 'https://tk-records.herokuapp.com/api';
const LOGIN_URL = `${API_ROOT}\login`;

export function searchInstructors(term) {
  const request = axios.get(`${API_ROOT}${COMMAND_SEARCH}&term=${term}`);

  return {
    type: SEARCH_INSTRUCTOR,
    payload: request
  }
}

export function login(values, callBack) {
  const request = axios.post(LOGIN_URL, values).then(() => {callBack();});
  return {
    type: LOGIN,
    payload: request
  };
}
