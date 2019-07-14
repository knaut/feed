// IMPORTS
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// REDUCERS
// CACHE STATE
import Cache from '../reducers/cache/Cache.js'
import Status from '../reducers/cache/Status.js'
// CLIENT STATE
import blockstack from '../reducers/blockstack.js'
import feed from '../reducers/feed.js'
import loader from '../reducers/loader.js'
import slate from '../reducers/slate.js'
import profile from '../reducers/profile.js'
import search from '../reducers/search.js'
import permalink from '../reducers/permalink.js'

// import all reducers here
// the root reducer will be fed to any generated store
export default (history) => combineReducers({
  router: connectRouter(history),

  Cache,
  Status,

  blockstack,
  feed,
  loader,
  slate,
  profile,
  search,
  permalink
})
