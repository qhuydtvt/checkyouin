import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';
import UserReducer from './reducer_user';
import RecordsReducer from './reducer_records';
import StatsReducer from './reducer_stats';
import { reducer as formReducer } from 'redux-form';

import { ADD_RECORD } from '../actions';

const rootReducer = combineReducers({
  form: formReducer.plugin({
    checkInForm : (state, action) => {
      switch (action.type) {
        case ADD_RECORD:
          console.log(state);
          return { ...state, 'fields': {
            'className' : {
              'touched' : false,
              'visited' : false
            },
            'date' : {
              'touched' : false,
              'visited' : false
            },
            'role' : {
              'touched' : false,
              'visited' : false
            }
          },
          'values': { date: new Date() } };
        default:
          return state;
      }
    }
  }),
  login: LoginReducer,
  user: UserReducer,
  records: RecordsReducer,
  stats: StatsReducer
});

export default rootReducer;
