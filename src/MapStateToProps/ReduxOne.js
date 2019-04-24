import {createStore} from 'redux'

//create an initial state
const studentState = {
  students:[
    {'id':1, 'name':'Opeyemi', 'score':10, 'nationality':'Nigeria'},
    {'id':2, 'name':'Oyetunde', 'score':15, 'nationality':'Ghana'},
    {'id':3, 'name':'Oyekunle', 'score':12, 'nationality':'Namibia'}
  ],
}

// create a student reducer function with parameters state and action
//the action contains a logic to perform CRUD and a payload(data for updating state)
const studentReducer = (state=studentState, action)=>{
  return state;
}

//pass the reducer to the redux createStore() function
const store = createStore(studentReducer);

//store.getState() function is used to get the states
const ReduxOne = store.getState();

export default ReduxOne
