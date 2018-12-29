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

// ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// REDUCERS
import rootReducer from './reducers/root';

// COMPONENTS
import App from './App.jsx';

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

const userSignedIn = blockstack.isUserSignedIn();

console.log({ blockstack, userSignedIn });

const Client = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={ App } />
      </ConnectedRouter>
    </Provider>
  );
}

ReactDOM.render(<Client/>, document.getElementById('root'));
