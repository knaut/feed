
import 'babel-polyfill'

// IMPORTS
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as blockstack from 'blockstack';

// ROUTER
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';

// ROUTER AUTH
import isSignedIn from './authentication/isSignedIn';

// SCREENS
import Index from './screens/Index.js';
import Feed from './screens/Feed.js';
import ProfileScreen from './screens/Profile.js';
import Permalinked from './screens/Permalinked.js';

// COMPONENTS
import Theme from './Theme.js';

// MODELS
import Profile from './models/Profile';

// UTILS
import generateStore from './utils/generateStore.js';
// BLOCKSTACK AUTH UTILS
import {
  loginToBlockstack,
  getProfileData,
  signInPending
} from './authentication/loginToBlockstack'

const App = () => {

  const store = generateStore();
  const history = createHistory();

  if (blockstack.isUserSignedIn()) {
    const user = blockstack.loadUserData();
    const { username } = user;    
    const profileData = getProfileData(user);

    // console.log(profileData);

    store.dispatch({
      type: 'IS_SIGNED_IN',
      payload: profileData
    });

    Profile.getCache().then(file => {
      console.log(file)
      store.dispatch({
        type: 'GET_CACHE_SUCCESS',
        payload: file
      });
    }).catch(error => {
      store.dispatch({
        type: 'GET_CACHE_ERROR',
        payload: error
      });
    });

  } else {
    console.log('You are not signed in to Blockstack.');
  }          

  return (
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <Theme>
          <Switch>
            <Route path="/" exact component={ Index } />
            {/*<Route path="/feed" exact component={ isSignedIn( Feed ) } />*/}
            <Route path="/permalink/:id?" component={ Permalinked }/>
            <Route path="/:username?/profile" component={ ProfileScreen }/>
          </Switch>
        </Theme>
      </ConnectedRouter>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
