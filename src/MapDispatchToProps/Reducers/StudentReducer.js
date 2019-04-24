import studentState from '../States/StudentState'

const studentReducer = (state=studentState, action)=>{
  if (action.type === 'DELETE_STUDENT') {
    return{
      ...state,
      students:state.students.filter(student=>student.id !== action.id)
    }
  }
  if (action.type === 'ADD_STUDENT') {
      return{
        ...state,
        students:[...state.students, action.record]
      }
    }
  return state;
}

export default studentReducer
