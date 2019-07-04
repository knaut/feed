// REDUX
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

// UTILS
import generateRootReducer from './generateRootReducer'

// ENV
const DEBUG = process.env.DEBUG

export const history = createBrowserHistory()

export default function generateStore(state) {
  const initialState = state ? state : {};

  let middleware = false

  if (DEBUG === 'TRUE') {
    middleware = compose(
      applyMiddleware(
        routerMiddleware(history),
        promise,
        thunk,
        createLogger()
      )
    )
  } else {
    middleware = compose(
      applyMiddleware(
        routerMiddleware(history),
        promise,
        thunk
      )
    )
  }

  const store = createStore(
    generateRootReducer(history),
    initialState,
    middleware
  );

  return store;
}