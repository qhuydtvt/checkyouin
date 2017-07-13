import { combineReducers } from 'redux';
import InstructorReducer from './reducer_instructor';

const rootReducer = combineReducers({
  instructors: InstructorReducer
});

export default rootReducer;
