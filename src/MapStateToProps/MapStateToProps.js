import React, {Component} from 'react'
import {connect} from 'react-redux'

class StateToProps extends Component{
  render(){
      const students = this.props.students.map(student=>{
        return(
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.score}</td>
            <td>{student.nationality}</td>
          </tr>
        )
      })
    return(
      <React.Fragment>
        <h2>List of students</h2>
        <table>
          <tbody>
            {students}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    students: state.studentReducer.students
  }
}

export default connect(mapStateToProps)(StateToProps);
