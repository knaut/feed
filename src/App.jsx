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
import Index from './screens/Index.jsx';
import Feed from './screens/Feed.jsx';
import ProfileScreen from './screens/Profile.jsx';
import Permalinked from './screens/Permalinked.jsx';

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

const getProfileData = (user) => {
  // take a blockstack user profile data,
  // return the data our user reducer will consume.
  const username = user.username;
  const name = user.profile.name;
  const description = user.profile.description;
  const image = user.profile.image[0].contentUrl

  return {
    username,
    name,
    image,
    description
  }
}

const App = () => {
  
  loginToBlockstack();

  const store = generateStore();
  const history = createHistory();

  if (blockstack.isUserSignedIn()) {
    const user = blockstack.loadUserData();
    const { username } = user;    
    const profileData = getProfileData(user);

    console.log(profileData);

    store.dispatch({
      type: 'IS_SIGNED_IN',
      payload: profileData
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
          <Route path="/permalink/:id?" component={ Permalinked }/>
          <Route path="/:username?" component={ ProfileScreen }/>
          
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
