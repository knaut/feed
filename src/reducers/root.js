import { combineReducers } from 'redux';

// REDUCERS
// import current from './current.js';
// import manifest from './manifest.js';
// import pages from './pages.js';
// import themes from './themes.js';
import user from './user.js';
import editor from './editor.js';

// import all other reducers here
// the root reducer will be fed to any generated store
const rootReducer = combineReducers({
  user,
  editor
});

export default rootReducer;