import { push } from 'react-router-redux'
import * as blockstack from 'blockstack'

// ACTION BUNDLES
import * as LoaderActions from './loader'

// TYPES
export const PROFILE_LOAD_SUCCESS = 'PROFILE_LOAD_SUCCESS'
export const PROFILE_LOAD_FAIL = 'PROFILE_LOAD_FAIL'
export const PROFILE_LOAD_PENDING = 'PROFILE_LOAD_PENDING'

// CREATORS
export function profileLoadSuccess(payload) {
  return {
    type: PROFILE_LOAD_SUCCESS,
    payload
  }
}

export function profileLoadPending(payload) {
  return {
    type: PROFILE_LOAD_PENDING,
    payload
  }
}

export function profileLoadFail(error) {
  return {
    type: PROFILE_LOAD_FAIL,
    payload: error
  }
}

// THUNKS
export function loadProfile(payload, route) {
  return async function(dispatch, getState) {
    const {
      author,
      blockstackUser
    } = payload

    dispatch(
      LoaderActions.loaderOn()
    )

    dispatch(
      profileLoadPending({
        id: author
      })
    )

    const state = getState()

    const blockstackUserIsAuthor = payload.blockstackUserIsAuthor ? blockstackUserIsAuthor : (
      state.blockstack.id === author ? true : false
    )

    if (blockstackUserIsAuthor) {
      // it's us! use our local store data
      
      const { name, description, id, image } = blockstackUser || state.blockstack

      const profileObj = {
        isLoading: false,
        isOnBlockstack: true,
        isOnFeed: true, // change this later, dont assume the logged in user is on Feed
        isMe: true,

        id,
        image,
        description,
        name
      }
      
      dispatch(
        profileLoadSuccess( profileObj )
      )

      if (state.router.location.pathname !== `/${id}/profile`) {
        dispatch(push(`/${id}/profile`))
      }

      dispatch(
        LoaderActions.loaderOff()
      )

    } else {
      // it's someone else's profile. load it.
      // optimistically fetch a cache url to check if they're on Feed
      try {
        // load author's blockstack profile
        const authorObj = await blockstack.lookupProfile(`${author}.id.blockstack`)

        const name = authorObj.name ? authorObj.name : author
        const username = author
        const description = authorObj.description
        const image = authorObj.image ? authorObj.image[0].contentUrl : false

        let isOnFeed = false
        try {
          const response = await blockstack.getUserAppFileUrl('cache.json', `${author}.id.blockstack`, process.env.DOMAIN)

          if (response) {
            isOnFeed = true
          }

          let isMe = blockstackUserIsAuthor || state.blockstack.id === author

          const profileObj = {
            isLoading: false,
            isOnBlockstack: true,
            isOnFeed,
            isMe,
            id: author,
            image,
            name,
            description
          }

          dispatch(
            profileLoadSuccess( profileObj )
          )

          if (state.router.location.pathname !== `/${author}/profile`) {
            dispatch(push(`/${author}/profile`))
          }

          dispatch(
            LoaderActions.loaderOff()
          )

        } catch (error) {
          console.error(error)

          dispatch(
            profileLoadFail(error)
          )

          dispatch(
            LoaderActions.loaderOff()
          )
        }

      } catch (error) {
        console.error(error)

        dispatch(
          profileLoadFail(error)
        )

        dispatch(
          LoaderActions.loaderOff()
        )

      }

    }

  }
}