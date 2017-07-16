import { FETCH_USER, ADD_RECORD } from  '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload.data;
    case ADD_RECORD:
      return {...state, 'recordCountToday': state.recordCountToday + 1 };
    default:
      return state;
  }
}
