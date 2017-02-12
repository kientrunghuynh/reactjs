import React, { Component } from 'react'
import { Link } from 'react-router'

class TopMenu extends Component {
  render() {
    return (
      <ul class='role-nav'>
        <li>Home</li>
        <li>Task List</li>
        <li>Create Task</li>
      </ul>
    )
  }
}

export default TopMenu