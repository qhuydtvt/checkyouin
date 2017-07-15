import _ from 'lodash';
import { LOGIN, FETCH_USER, LOAD_TOKEN_FROM_STORAGE } from "../actions";
import axios from 'axios';

export default function(state={}, action) {
  switch (action.type) {
    case LOGIN:
        return _.pick(action.payload.data, ['result', 'message', 'token']);
      break;
    case FETCH_USER:
        return { ...state, "user": action.payload.data };
      break;
    case LOAD_TOKEN_FROM_STORAGE:
        return { ...state, "token": action.payload };
      break;
    default:
      return state;
  }
}
