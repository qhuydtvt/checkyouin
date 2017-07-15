import _ from 'lodash';
import { FETCH_USER } from  '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload.data;
      break;
    default:
      return state;
      break;
  }
}
