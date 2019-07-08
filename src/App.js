/*
  _____                 .___
_/ ____\____   ____   __| _/
\   __\/ __ \_/ __ \ / __ | 
 |  | \  ___/\  ___// /_/ | 
 |__|  \___  >\___  >____ | 
           \/     \/     \/ 

  v1.0.0 – "Cupcake"
*/

import 'babel-polyfill'

// IMPORTS
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// ROUTER
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

// SCREENS
import Home from './screens/Home'

// UTILS
import generateStore from './utils/generateStore'

const store = generateStore()
const history = createBrowserHistory()

const DEBUG = process.env.DEBUG

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/' exact component={ Home } />
      </Switch>
    </ConnectedRouter>
  </Provider>
)



ReactDOM.render(<App />, document.getElementById('root'))
