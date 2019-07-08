// IMPORTS
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// REDUCERS
// CACHE STATE
// import Profile from '../reducers/api/Profile.js'
// import Status from '../reducers/api/Status.js'

// CLIENT STATE
import blockstack from '../reducers/blockstack.js'
import feed from '../reducers/feed.js'
import loader from '../reducers/loader.js'
import slate from '../reducers/slate.js'

// import user from '../reducers/user.js'

// import cache from '../reducers/cache.js'
// import loader from '../reducers/loader.js'
// import search from '../reducers/search.js'

// import all reducers here
// the root reducer will be fed to any generated store
export default (history) => combineReducers({
  router: connectRouter(history),

  blockstack,
  feed,
  loader,
  slate

  // Profile,
  // Status,

  // user,
  // editor,
  // cache,
  // loader,
  // search
})
