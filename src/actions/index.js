import axios from 'axios';

export const SEARCH_INSTRUCTOR = "search_instructors";

const API_ROOT = 'https://script.google.com/macros/s/AKfycbxMRxd-cZdPmaEP7StW6KD_0le4t_DUugu8SpQKIglM3GHnKh7K/exec'
const COMMAND_SEARCH = "?command=search"

export function searchInstructors(term) {
  const request = axios.get(`${API_ROOT}${COMMAND_SEARCH}&term=${term}`);

  return {
    type: SEARCH_INSTRUCTOR,
    payload: request
  }
}
