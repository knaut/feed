
import 'babel-polyfill'

// IMPORTS
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as blockstack from 'blockstack';

// ROUTER
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

// ROUTER AUTH
import isSignedIn from './authentication/isSignedIn';

// SCREENS
import Index from './screens/Index';
import ProfileScreen from './screens/Profile';
import Permalinked from './screens/Permalinked';
import Search from './screens/Search';

// COMPONENTS
import Theme from './Theme';
import UserFeed from './screens/UserFeed'

// MODELS
import Profile from './models/Profile';

// UTILS
import generateStore from './utils/generateStore';

const store = generateStore();
const history = createBrowserHistory();

class App extends Component {
  render() {

    const userSession = new blockstack.UserSession()
    const isSignedIntoBlockstack = userSession.isUserSignedIn()

    // console.log({userSession, isSignedIntoBlockstack, userData})

    if (isSignedIntoBlockstack) {
      
      const userData = userSession.loadUserData()
      const username = userData.username.split('.')[0]
      console.log(userData, username)
      const { name, description } = userData.profile
      const image = userData.profile.image[0].contentUrl
    

      store.dispatch({
        type: 'IS_SIGNED_IN',
        payload: {
          username,
          name,
          description,
          image,
          isAuthenticated: true
        }
      });

      userSession.listFiles(file => {
        console.log(file)
        if (file) {
          // if (file !== 'cache.json') {
            // userSession.deleteFile(file).then(() => console.log(`Deleted unrecognized file: ${file}`))
          // }
          return file
        }
      }).then(files => {
        console.log(files)
        if (files === 0) {
          
          console.log('There are no user cache files!')

          const profile = new Profile({
            username
          })

          console.log({ profile })
          const props = profile.getProps()

          console.log(props)
          
          
          Profile.startCache(
            props
          ).then(res => {
            console.log(res)

            Profile.getCache().then(res2 => {
              console.log(res2)
              store.dispatch({
                type: 'GET_CACHE_SUCCESS',
                payload: res2
              });
            }).catch(error => {
              console.log('error', error)
              store.dispatch({
                type: 'GET_CACHE_ERROR',
                payload: error
              });
            });

          }).catch(error => {
            console.log(error)
          })


        } else {
          
          
          Profile.getCache().then(res2 => {
            console.log(res2)
            store.dispatch({
              type: 'GET_CACHE_SUCCESS',
              payload: res2
            });
          }).catch(error => {
            console.log('error', error)
            store.dispatch({
              type: 'GET_CACHE_ERROR',
              payload: error
            });
          });
          

        }
      })


      
      
      

    } else {
      console.log('You are not signed in to Blockstack.');
    }

    /*

    

    const userSession = new blockstack.UserSession()
    userSession.listFiles(file => {
      console.log(file)
      if (file) return true
      if (file) {
        userSession.deleteFile(file).then(res => {
          console.log(res)
          return true
        })
      }
    }).then(files => {
      console.log(files)
    })

    */

    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <Theme>
            <Switch>
              <Route path="/" exact component={ Index } />
              <Route path="/search" exact component={ Search }/>
              {/*
              <Route path="/permalink/:id?" exact component={ isSignedIn( Permalinked ) }/>
              */}
              <Route path="/:username?" exact component={ ProfileScreen }/>
              {/*
                an "author" is the presenting user for a given feed. it is an author's
                posts we are viewing on feed.
                we use the author param to determing whether the logged in user has access
                to post on the given feed
              */}
              <Route path="/:author?/feed" exact component={ isSignedIn( UserFeed ) }/>
            </Switch>
          </Theme>
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
