// REDUX
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

// REDUCERS
// import rootReducer from '../../src/reducers/root';
import generateRootReducer from './generateRootReducer'

export const history = createBrowserHistory()

export default function generateStore(state) {
  const initialState = state ? state : {};

  const store = createStore(
    generateRootReducer(history),
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        promise,
        thunk,
        createLogger()
      )
    )
  );

  return store;
}