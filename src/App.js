
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
// BLOCKSTACK AUTH UTILS
import {
  loginToBlockstack,
  getProfileData,
  signInPending
} from './authentication/loginToBlockstack'

const store = generateStore();
const history = createBrowserHistory();

class App extends Component {
  render() {

    if (blockstack.isUserSignedIn()) {
      const user = blockstack.loadUserData();
      const { username } = user;    
      const profileData = getProfileData(user);

      store.dispatch({
        type: 'IS_SIGNED_IN',
        payload: profileData
      });

      const userSession = new blockstack.UserSession()
      userSession.listFiles(file => {
        if (file) {
          return file
        }
      }).then(files => {
        if (files === 0) {
          
          console.log('There are no user cache files!')
          
          Profile.startCache().then(file => {
            console.log(file)
          }).catch(error => {
            console.log(file)
          })

        } else {
          Profile.getCache().then(file => {
            console.log(file)
            // store.dispatch({
            //   type: 'GET_CACHE_SUCCESS',
            //   payload: file
            // });
          }).catch(error => {
            console.log('error', error)
            // store.dispatch({
            //   type: 'GET_CACHE_ERROR',
            //   payload: error
            // });
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
              <Route path="/permalink/:id?" exact component={ Permalinked }/>
              <Route path="/:username?" exact component={ ProfileScreen }/>
              {/*
                an "author" is the presenting user for a given feed. it is an author's
                posts we are viewing on feed.
                we use the author param to determing whether the logged in user has access
                to post on the given feed
              */}
              <Route path="/:author?/feed" exact component={ UserFeed }/>
            </Switch>
          </Theme>
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
