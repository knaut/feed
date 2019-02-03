// IMPORTS
import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as blockstack from 'blockstack';

// ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// ROUTER AUTH
import isSignedIn from './authentication/isSignedIn';

// SCREENS
import Index from './screens/Index.jsx';
import Feed from './screens/Feed.jsx';
import ProfileScreen from './screens/Profile.jsx';

// COMPONENTS
import ProfileCard from './components/ProfileCard.jsx';

// MODELS
import Profile from './models/Profile';

// UTILS
import generateStore from './utils/generateStore.js';

const loginToBlockstack = () => {
  if (blockstack.isUserSignedIn()) {
    const profile = blockstack.loadUserData().profile;
    const person = new blockstack.Person(profile);

  } else if (blockstack.isSignInPending()) {
    blockstack.handlePendingSignIn().then(function(userData) {
      window.location = window.location.origin
    });
  }
}

loginToBlockstack();

const App = () => {

  const store = generateStore();
  const history = createHistory();
  
  console.log(store);

  if (blockstack.isUserSignedIn()) {
    const user = blockstack.loadUserData();
    const { username } = user;

    store.dispatch({
      type: 'IS_SIGNED_IN',
      payload: {
        username
      }
    });

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

  } else {
    console.log('You are not signed in to Blockstack.');
  }          

  return (
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <Switch>
          <Route path="/" exact component={ Index } />
          <Route path="/feed" exact component={ isSignedIn( Feed ) } />
          <Route path="/:username?" component={ isSignedIn( ProfileScreen ) }/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
