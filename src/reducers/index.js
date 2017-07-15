import { combineReducers } from 'redux';
import InstructorReducer from './reducer_instructor';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  instructors: InstructorReducer
});

export default rootReducer;
