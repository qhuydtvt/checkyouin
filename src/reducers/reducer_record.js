import _ from 'lodash';
import { ADD_RECORD } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_RECORD:
      const { result, message } = action.payload.data;
      return { ...state, 'addRecordResult': result, 'addRecordMessage': message };
    default:
      return state;
  }
}
