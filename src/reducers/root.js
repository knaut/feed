import { combineReducers } from 'redux';

// REDUCERS
// CACHE STATE
import Profile from './api/Profile.js';
import Status from './api/Status.js';

// CLIENT STATE
import user from './user.js';
import editor from './editor.js';
import cache from './cache.js';

// import all other reducers here
// the root reducer will be fed to any generated store
const rootReducer = combineReducers({
  Profile,
  Status,

  user,
  editor,
  cache
});

export default rootReducer;