import {createStore, combineReducers} from 'redux';
import studentReducer from './StudentReducer';
import teacherReducer from './TeacherReducer';

//the studentReducer and teacherReducer are assigned to collegeReducers object
const collegeReducers = {
  studentReducer,
  teacherReducer
}

//combineReducers is used to combine reducers or prepare the reducers for createStore() function
const reducers = combineReducers(collegeReducers)

export default reducers
