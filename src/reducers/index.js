import { combineReducers } from 'redux';
import InstructorReducer from './reducer_instructor';
import LoginReducer from './reducer_login';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  login: LoginReducer,
  instructors: InstructorReducer
});

export default rootReducer;
