import _ from 'lodash';
import { LOGIN, LOGOUT, LOAD_TOKEN_FROM_STORAGE } from "../actions";

export default function(state={}, action) {
  switch (action.type) {
    case LOGIN:
        return _.pick(action.payload.data, ['result', 'message', 'token']);
    case LOGOUT:
        return { ...state, 'token': null, 'message': 'Logged out', 'result': 1 };
    case LOAD_TOKEN_FROM_STORAGE:
        return { ...state, "token": action.payload };
    default:
      return state;
  }
}
