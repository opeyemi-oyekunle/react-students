import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class MapDisPatchToProps extends Component{
  constructor(){
    super()
    this.state = {id:null, name:null, score:null, nationality:null}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleClick = (id)=>{
    this.props.deleteStudent(id)
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.id] : [e.target.value]
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    this.props.addStudent(this.state)
  }
  render(){
      const students = this.props.students.map(student=>{
        return(
          <tr key={student.id}>
            <td>{student.id}</td>
            <td><Link to={`${this.props.match.url}/${student.id}`}>{student.name}</Link></td>
            <td>{student.score}</td>
            <td>{student.nationality}</td>
            <td><button onClick={()=>{this.handleClick(student.id)}}>Delete</button></td>
          </tr>
        )
      })
    return(
      <React.Fragment>
        <h2>List of students</h2>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>ID</label>
            <input type="text" id="id" onChange={this.handleChange} />
          </p>
          <p>
            <label>Name</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </p>
          <p>
            <label>Score</label>
            <input type="text" id="score" onChange={this.handleChange} />
          </p>
          <p>
            <label>Nationality</label>
            <input type="text" id="nationality" onChange={this.handleChange} />
          </p>
          <button type="submit">Add Student</button>
        </form>
        <table>
          <tbody>
            {students}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state, ownProps)=>{
  return{
    students: state.studentReducer.students
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    deleteStudent: (id)=>{dispatch({type:'DELETE_STUDENT', id})},
    addStudent: (record)=>{dispatch({type: 'ADD_STUDENT', record})}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MapDisPatchToProps);
