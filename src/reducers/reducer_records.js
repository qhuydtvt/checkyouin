import _ from 'lodash';
import { ADD_RECORD, FETCH_RECORDS, CLEAR_RECORDS, DELETE_RECORD } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case ADD_RECORD:
      const newRecord = action.payload.data;
      newRecord.isNew = true;
      return _.concat([newRecord], state);
    case FETCH_RECORDS:
      return action.payload.data;
    case DELETE_RECORD:
      console.log("record deleted");
      console.log(action.payload.data);
      const deletedRecordId = action.payload.data._id;
      return _.filter(state, record => deletedRecordId !== record._id);
    case CLEAR_RECORDS:
      return null;
    default:
      return state;
  }
}
