import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class TaskList extends Component {
  render() {
    return (
      <div class='list-tasks'>
        <p>This is list tasks</p>
        <ul>
          <li><Link to="/detail">Taks 1 </Link></li>
          <li><Link to="/detail">Taks 2 </Link></li>
          <li><Link to="/detail">Taks 3 </Link></li>
          <li><Link to="/detail">Taks 4 </Link></li>
        </ul>
      </div>
    )
  }
}

export default TaskList