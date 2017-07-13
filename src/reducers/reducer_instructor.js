import _ from 'lodash';
import { SEARCH_INSTRUCTOR } from '../actions';

export default function(state={}, action) {
  switch (action.type) {
    case SEARCH_INSTRUCTOR:
      return _.mapKeys(action.payload.data, "id");
      break;
    default:
    return state;
  }
}
