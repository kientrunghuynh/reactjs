import React from 'react'
import { Link } from 'react-router'

import List from './Task/List'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Tasks Management</h1>
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link activeStyle={{ color: 'red' }} to="/create">Create task</Link></li>
        </ul>
        {this.props.children || <List/>}
      </div>
    )
  }
})
