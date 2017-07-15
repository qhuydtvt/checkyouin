import _ from 'lodash';
import { LOGIN } from "../actions";

export default function(state={}, action) {

  switch (action.type) {
    case LOGIN:
        const {result, message, token} = action.payload.data;
        return {result, message, token};
      break;
    default:
      return state;
  }
}
