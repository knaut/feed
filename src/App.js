
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

// ROUTER AUTH
import isSignedIn from './authentication/isSignedIn'

// SCREENS
import Index from './screens/Index'
import ProfileScreen from './screens/Profile'
import Permalinked from './screens/Permalinked'
import Search from './screens/Search'

// COMPONENTS
import Theme from './Theme'
import UserFeed from './screens/UserFeed'

// MODELS
import Profile from './models/Profile'

// UTILS
import generateStore from './utils/generateStore'

const store = generateStore()
const history = createBrowserHistory()

const DEBUG = process.env.DEBUG

const listFiles = async (userSession) => {
  const files = await userSession.listFiles(file => {
    return file ? file : false
  })

  if (DEBUG) console.log(`listFiles:`, files)
  return files
}

const startCache = async (username) => {
  try {
    const profile = new Profile({
      username
    })
    const props = profile.getProps()

    const response = await Profile.startCache(props)
    console.log(`startCache:`, response)

    return response

  } catch (error) {
    console.log(error)
    return false
  }
}

const fetchCache = async () => {
  try {
    const cache = await Profile.getCache()
    if (DEBUG) console.log(`getCache method response:`, cache)
    return cache
  } catch (error) {
    console.log('error', error)
    return false
  }
}

class App extends Component {
  async componentDidMount() {
    store.dispatch({
      type: 'IS_SIGNED_IN_PENDING',
      payload: {
        isAuthenticating: true
      }
    })

    const userSession = new blockstack.UserSession()
    const isSignInPending = userSession.isSignInPending()

    if (isSignInPending) {
      // the user is logging in for the first time
      try {

        const userData = await userSession.handlePendingSignIn()

        if (DEBUG) console.log(`userData`, userData)

        const username = userData.username.split('.')[0]
        const { name, description } = userData.profile
        const image = userData.profile.image ? userData.profile.image[0].contentUrl : false

        store.dispatch({
          type: 'IS_SIGNED_IN',
          payload: {
            username,
            name,
            description,
            image,
            isAuthenticated: true
          }
        })

        const files = await listFiles(userSession)

        if (files === 0) {
          // user has no files, start a new cache
          const fresh = await startCache(username)

          store.dispatch({
            type: 'GET_CACHE_SUCCESS',
            payload: fresh
          })

        } else {
          // user has files, fetch them and start
          const fetchedCache = await fetchCache()

          store.dispatch({
            type: 'GET_CACHE_SUCCESS',
            payload: fetchedCache
          })

        }

      } catch (error) {
        console.log(error)

        store.dispatch({
          type: 'IS_NOT_SIGNED_IN',
          payload: {
            isAuthenticating: false,
            isAuthenticated: false
          }
        })

      }
    } else {
      // we've logged in before, or never logged in ever
      const isSignedIntoBlockstack = userSession.isUserSignedIn()

      if (isSignedIntoBlockstack) {
        
        const userData = userSession.loadUserData()

        if (DEBUG) console.log(`userData`, userData)

        const username = userData.username.split('.')[0]
        const { name, description } = userData.profile
        const image = userData.profile.image ? userData.profile.image[0].contentUrl : false

        store.dispatch({
          type: 'IS_SIGNED_IN',
          payload: {
            username,
            name,
            description,
            image,
            isAuthenticated: true
          }
        })

        try {
          const files = await listFiles(userSession)

          if (files === 0) {
            // user has no files, start a new cache
            const fresh = await startCache(username)
            const fetchedCache = await fetchCache()

            store.dispatch({
              type: 'GET_CACHE_SUCCESS',
              payload: fetchedCache
            })

          } else {
            // user has files, fetch them and start
            const fetchedCache = await fetchCache()

            store.dispatch({
              type: 'GET_CACHE_SUCCESS',
              payload: fetchedCache
            })

          }
        } catch (error) {
          console.log('error', error)
          store.dispatch({
            type: 'GET_CACHE_ERROR',
            payload: error
          })
        }

      } else {
        console.log('You are not signed in to Blockstack.')
      }

    }
  }

  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Theme>
            <Switch>
              <Route path='/' exact component={Index} />
              <Route path='/search' exact component={Search} />
              {/*
              <Route path="/permalink/:id?" exact component={ isSignedIn( Permalinked ) }/>
              */}
              <Route path='/:username?' exact component={ProfileScreen} />
              {/*
                an "author" is the presenting user for a given feed. it is an author's
                posts we are viewing on feed.
                we use the author param to determing whether the logged in user has access
                to post on the given feed
              */}
              <Route path='/:author?/feed' exact component={ isSignedIn(UserFeed) } />
            </Switch>
          </Theme>
        </ConnectedRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
