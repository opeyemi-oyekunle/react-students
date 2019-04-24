import {createStore} from 'redux'

//create an initial state
const teacherState = {
  teachers:[
    {'id':1, 'name':'Odunola', 'age':14, 'nationality':'England'},
    {'id':2, 'name':'Damilola', 'age':35, 'nationality':'Germany'},
    {'id':3, 'name':'Arike', 'age':22, 'nationality':'Egypt'}
  ]
}

// create a teacher reducer function with parameters state and action
//the action contains a logic to perform CRUD and a payload(data for updating state)
const teacherReducer = (state=teacherState, action)=>{
  return state;
}

//pass the reducer to the redux createStore() function
const store = createStore(teacherReducer);

//store.getState() function is used to get the states
const ReduxTwo = store.getState();

export default ReduxTwo
