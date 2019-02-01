// REDUX
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';

// REDUCERS
import rootReducer from '../../src/reducers/root';

export default function generateStore(state) {
  const initialState = state ? state : {};
  const history = createHistory();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      promise(),
      thunk,
      createLogger()
    )
  );

  return store;
}