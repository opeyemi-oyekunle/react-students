import {createStore, combineReducers} from 'redux';

//create an initial state
const studentState = {
  students:[
    {'id':1, 'name':'Opeyemi', 'score':10, 'nationality':'Nigeria'},
    {'id':2, 'name':'Oyetunde', 'score':15, 'nationality':'Ghana'},
    {'id':3, 'name':'Oyekunle', 'score':12, 'nationality':'Namibia'}
  ]
}

//create an initial state
const teacherState = {
  teachers:[
    {'id':1, 'name':'Odunola', 'age':14, 'nationality':'England'},
    {'id':2, 'name':'Damilola', 'age':35, 'nationality':'Germany'},
    {'id':3, 'name':'Arike', 'age':22, 'nationality':'Egypt'}
  ]
}

const studentReducer = (state=studentState, action)=>{
  return state;
}

const teacherReducer = (state=teacherState, action)=>{
  return state;
}

//the studentReducer and teacherReducer are assigned to collegeReducers object
const collegeReducers = {
  studentReducer,
  teacherReducer
}

//combineReducers is used to combine reducers or prepare the reducers for createStore() function
const reducers = combineReducers(collegeReducers)

const store = createStore(reducers)

export default store
