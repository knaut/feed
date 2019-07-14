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
import * as blockstack from 'blockstack'

// ROUTER
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

// SCREENS
import Home from './screens/Home'
import Feed from './screens/Feed'
import Profile from './screens/Profile'
import Search from './screens/Search'
import Permalink from './screens/Permalink'

// UTILS
import getLocalBlockstackUser from './utils/getLocalBlockstackUser'
import generateStore from './utils/generateStore'

// ACTIONS
import * as BlockstackActions from './actions/blockstack'
import * as CacheActions from './actions/cache'

const history = createBrowserHistory()
const store = generateStore(history)

const DEBUG = process.env.DEBUG

class App extends Component {
  async componentDidMount() {
    // BLOCKSTACK AUTH
    const session = new blockstack.UserSession()
    const localUser = getLocalBlockstackUser(session)
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

      try {
        const userData = await session.handlePendingSignIn()

        if (DEBUG) console.log(`userData`, userData)

        store.dispatch(
          BlockstackActions.isSignedIn({
            ...userData,
            isAuthenticated: true
          })
        )

        const files = await CacheActions.listFiles(session)

        // check if we have files
        if (DEBUG) console.log('cache files:', files)

        if (files) {
          const fetchThunk = CacheActions.fetchCacheThunk()
          await fetchThunk(store.dispatch, store)
        
        } else {
          // start a new user cache
          const startThunk = CacheActions.startCacheThunk()
          await startThunk(store.dispatch, store)

          // now fetch it
          const fetchThunk = CacheActions.fetchCacheThunk()
          await fetchThunk(store.dispatch, store)
        }

      } catch (error) {
        console.error(error)
      }

    } else {
      // we're not signing in, check if we're authed
      if (isSignedIntoBlockstack) {
        store.dispatch(
          BlockstackActions.isSignedIn(userData)
        )

        // check if we have files
        const files = await CacheActions.listFiles(session)

        if (DEBUG) console.log('cache files:', files)

        if (files) {
          const fetchThunk = CacheActions.fetchCacheThunk()
          await fetchThunk(store.dispatch, store)
        
        } else {
          // start a new user cache
          const startThunk = CacheActions.startCacheThunk()
          await startThunk(store.dispatch, store)

          // now fetch it
          const fetchThunk = CacheActions.fetchCacheThunk()
          await fetchThunk(store.dispatch, store)
        }

        const fetchThunk = CacheActions.fetchCacheThunk()
        await fetchThunk(store.dispatch, store)

      } else {
        // we're not signed in
        store.dispatch(
          BlockstackActions.isNotSignedIn()
        )
        // don't fetch anything
      }
    }

    /*
      on App load, we optimistically get our user cache
    */
    // const fetchThunk = CacheActions.fetchCacheThunk()
    // await thunk(store.dispatch, store)
  }
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/search' exact component={ Search } />
            <Route path='/:author' exact component={ Feed } />
            <Route path='/:author/profile' exact component={ Profile } />
            <Route path='/:author/permalink/:link' exact component={ Permalink } />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'))
