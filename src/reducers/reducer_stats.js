import _ from 'lodash';
import { FETCH_STATS } from "../actions";

export default function(state = null, action){
  switch (action.type) {
    case FETCH_STATS:
        return action.payload.data;
      break;
    default:
      return state;
  }
}
