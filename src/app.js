import React from 'react'

import Navigation from './partials/Menu'
import List from './Task/List'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Tasks Management</h1>
        <Navigation/>
        <div class='container'>{this.props.children || <List/>} </div>
      </div>
    )
  }
})
