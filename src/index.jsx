// IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import * as blockstack from 'blockstack';
// REDUX
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
// REDUCERS
import rootReducer from './reducers/root';
// COMPONENTS
import App from './App.jsx';
// MISC STYLES
import './index.css';

const state = {};

const store = createStore(
  rootReducer,
  state,
  applyMiddleware(
    promise(),
    thunk,
    createLogger()
  )
);

const userSignedIn = blockstack.isUserSignedIn();

console.log({ blockstack, userSignedIn });

const Client = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(<Client/>, document.getElementById('root'));
