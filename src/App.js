
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

const App = () => {

  const store = generateStore();
  const history = createBrowserHistory();

  if (blockstack.isUserSignedIn()) {
    const user = blockstack.loadUserData();
    const { username } = user;    
    const profileData = getProfileData(user);

    store.dispatch({
      type: 'IS_SIGNED_IN',
      payload: profileData
    });

  } else {
    console.log('You are not signed in to Blockstack.');
  }

  Profile.getCache().then(file => {
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
};

ReactDOM.render(<App/>, document.getElementById('root'));
