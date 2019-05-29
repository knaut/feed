// IMPORTS
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// REDUCERS
// CACHE STATE
import Profile from '../reducers/api/Profile.js';
import Status from '../reducers/api/Status.js';

// CLIENT STATE
import user from '../reducers/user.js';
import editor from '../reducers/editor.js';
import cache from '../reducers/cache.js';

// import all reducers here
// the root reducer will be fed to any generated store
export default (history) => combineReducers({
  router: connectRouter(history),
  Profile,
  Status,

  user,
  editor,
  cache
})