import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';
import UserReducer from './reducer_user';
import RecordReducer from './reducer_record';
import { reducer as formReducer } from 'redux-form';

import { ADD_RECORD } from '../actions';

const rootReducer = combineReducers({
  form: formReducer.plugin({
    checkInForm : (state, action) => {
      switch (action.type) {
        case ADD_RECORD:
          return undefined;
        default:
          return state;
      }
    }
  }),
  login: LoginReducer,
  user: UserReducer,
  record: RecordReducer
});

export default rootReducer;
