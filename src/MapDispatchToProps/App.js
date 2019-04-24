import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import MapDispatchToProps from './MapDispatchToProps'

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
        <Link to="/students">Students</Link>
        <Route path="/students" component={MapDispatchToProps} />
        </div>

      </BrowserRouter>
    )
  }
}

export default App
