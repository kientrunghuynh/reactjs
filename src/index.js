import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import app from './app'
import TaskList from './Task/List'
import Create from './Task/Create'
import Detail from './Task/Detail'
import TopMenu from './partials/Menu'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={app} >
            <Route path="/create" component={Create} />
            <Route path="/detail" component={Detail} />
        </Route>    
    </Router>,
    document.getElementById('root')
)