import _ from 'lodash';
import { ADD_RECORD, FETCH_RECORDS, CLEAR_RECORDS } from '../actions';

export default function(state = { pastRecords: [] }, action) {
  switch (action.type) {
    case ADD_RECORD:
      const newRecord = action.payload.data;
      newRecord.isNew = true;
      return { ...state,
        'addRecordResult': 1,
        'pastRecords': [newRecord].concat(state.pastRecords)
      };
    case FETCH_RECORDS:
      return { ...state, 'pastRecords': action.payload.data };
    case CLEAR_RECORDS:
      return _.omit(state, ['pastRecords']);
    default:
      return state;
  }
}
