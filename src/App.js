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
import Feed from './screens/Feed'
import Profile from './screens/Profile'

// UTILS
import getLocalBlockstackUser from './utils/getLocalBlockstackUser'
import generateStore from './utils/generateStore'

// ACTIONS
import * as BlockstackActions from './actions/blockstack'

const history = createBrowserHistory()
const store = generateStore(history)

const App = () => {

  const localUser = getLocalBlockstackUser()

  const {
    isSignedIntoBlockstack,
    isSignInPending,
    userData
  } = localUser

  if (isSignInPending) {
    // branch based on whether the user was just signing in
    store.dispatch(
      BlockstackActions.isSignInPending()
    )
  } else {
    // we're not signing in, check if we're authed
    if (isSignedIntoBlockstack) {
      store.dispatch(
        BlockstackActions.isSignedIn(userData)
      )
    } else {
      // we're not signed in
      store.dispatch(
        BlockstackActions.isNotSignedIn()
      )
    }
  }

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/:author' exact component={ Feed } />
          <Route path='/:author/profile' exact component={ Profile } />
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))
