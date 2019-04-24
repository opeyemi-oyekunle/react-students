import {createStore} from 'redux'

//create an initial state
const studentState = {
  students:[
    {'id':1, 'name':'Opeyemi', 'score':10, 'nationality':'Nigeria'},
    {'id':2, 'name':'Oyetunde', 'score':15, 'nationality':'Ghana'},
    {'id':3, 'name':'Oyekunle', 'score':12, 'nationality':'Namibia'}
  ],
}

//create action
const addStudent = (id, name, score, nationality)=>{
  return {
    type: 'ADD_STUDENT',
    record:{id, name, score, nationality}
  }
}
// create a student reducer function with parameters state and action
//the action contains a logic to perform CRUD and a payload(data for updating state)
const studentReducer = (state=studentState, action)=>{
  if (action.type === 'ADD_STUDENT') {
      return{
        ...state,
        students:[...state.students, action.record]
      }
    }
  return state;
}

//pass the reducer to the redux createStore() function
const store = createStore(studentReducer);

//the subscribe() function allow us to listen to event changes
let unsubscribe = store.subscribe(()=>{
  store.getState();
});

//adding action to dispatch() function
store.dispatch(addStudent(4, 'Wale', 19, 'Cameroon'));

//unsubscribe invoked
unsubscribe();

export default store
