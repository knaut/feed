
// IMPORTS
import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as blockstack from 'blockstack';

// REDUX
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// ROUTER AUTH
import isSignedIn from './authentication/isSignedIn';

// REDUCERS
import rootReducer from './reducers/root';

// SCREENS
import Index from './screens/Index.jsx';
import Feed from './screens/Feed.jsx';

// COMPONENTS
import ProfileCard from './components/ProfileCard.jsx';

// MODELS
import Profile from './models/Profile';

const state = {};
const history = createHistory();
const store = createStore(
  rootReducer,
  state,
  applyMiddleware(
    promise(),
    thunk,
    createLogger()
  )
);

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

  if (blockstack.isUserSignedIn()) {
    const user = blockstack.loadUserData();
    const { username } = user;

    store.dispatch({
      type: 'IS_SIGNED_IN',
      payload: {
        username
      }
    });

    const myProfile = new Profile({
      username
    });

    myProfile.getCache().then(file => {
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
          <Route path="/:username?" 
            exact
            render={
              routeProps => <ProfileCard {...routeProps} />
            }
          />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
