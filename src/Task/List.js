import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class TaskList extends Component {
  render() {
    return (
      <div class='list-tasks'>
        <p>This is list tasks</p>
        <ul>
          <li>Taks 1 </li>
          <li>Taks 2 </li>
          <li>Taks 3 </li>
          <li>Taks 4 </li>
        </ul>
      </div>
    )
  }
}

export default TaskList