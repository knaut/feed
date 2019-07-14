import * as blockstack from 'blockstack'

// ACTION BUNDLES
import * as LoaderActions from '../actions/loader'
import * as CacheActions from '../actions/cache'

// TYPES
export const PERMALINK_FETCH_SUCCESS = 'PERMALINK_FETCH_SUCCESS'
export const PERMALINK_FETCH_FAIL = 'PERMALINK_FETCH_FAIL'

// CREATORS
export function fetchPermalinkSuccess(payload) {
  return {
    type: PERMALINK_FETCH_SUCCESS,
    payload
  }
}

export function fetchPermalinkFail(payload) {
  return {
    type: PERMALINK_FETCH_FAIL,
    payload
  }
}

// THUNKS
export function fetchPermalink(payload) {
  return async function(dispatch, getState) {
    dispatch(
      LoaderActions.loaderOn()
    )

    const state = getState()

    console.log({payload, state})

    const {
      author,
      link,
      blockstackUserIsAuthor
    } = payload
    
    if (blockstackUserIsAuthor === true) {

      const blockstackUser = state.blockstack

      const cache = await CacheActions.fetchCache()

      const post = cache.Status.entities[ link ]
      const authorObj = {
        image: blockstackUser.image,
        name: blockstackUser.name,
        username: blockstackUser.id
      }
      
      dispatch(
        fetchPermalinkSuccess({
          post,
          author: authorObj
        })
      )
    } else {

      try {
        // load author's blockstack profile
        const authorObj = await blockstack.lookupProfile(`${author}.id.blockstack`)

        const name = authorObj.name ? authorObj.name : author
        const username = author
        const image = authorObj.image ? authorObj.image[0].contentUrl : false

        try {
          const url = await blockstack.getUserAppFileUrl(
            'cache.json', 
            `${author}.id.blockstack`, 
            process.env.DOMAIN
          )      
          
          const response = await fetch(url)
          const json = await response.json()
          
          const post = json.Status.entities[link]

          dispatch(
            fetchPermalinkSuccess({
              post,
              author: {
                name,
                username,
                image
              }
            })
          )

        } catch (error) {
          console.error(error)

          dispatch(
            fetchPermalinkFail(error)
          )
        }

      } catch (error) {
        console.error(error)

        dispatch(
          fetchPermalinkFail(error)
        )
      }

    }
  }
}





