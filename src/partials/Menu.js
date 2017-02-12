import React, { Component } from 'react'
import { Link } from 'react-router'

class Navgation extends Component {
  render() {
    return (
      <ul role="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create task</Link></li>
      </ul>
    )
  }
}

export default Navgation