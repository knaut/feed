import * as blockstack from 'blockstack'

const DOMAIN = process.env.DOMAIN

export async function fetchCache( userToFetch ) {
  try {
    const url = await blockstack.getUserAppFileUrl('cache.json', `${userToFetch}.id.blockstack`, DOMAIN)      
    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
    return false
  }
}

import * as LoaderActions from './loader'

// TYPES
export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS'
export const FETCH_FEED_FAIL = 'FETCH_FEED_FAIL'

// CREATORS
export function fetchFeedSuccess (payload) {
  return {
    type: FETCH_FEED_SUCCESS,
    payload
  }
}

export function fetchFeedFail (payload) {
  return {
    type: FETCH_FEED_FAIL,
    payload
  }
}

// THUNKS
export function fetchFeed( payload ) {
  return async function( dispatch, getState ) {
    dispatch( LoaderActions.loaderOn() )
    
    const state = getState()
    const { author } = payload
    const authorProfile = {}

    if (author === state.blockstack.id) {
      // we are fetching our own feed
      // assign our author profile with our props
      authorProfile.name = state.blockstack.name
      authorProfile.username = state.blockstack.id
      authorProfile.image = state.blockstack.image

    } else {
      // we are fetching someone else's feed
      try {
        const profile = await blockstack.lookupProfile(`${author}.id.blockstack`)
        console.log(profile)

        authorProfile.name = profile.name
        authorProfile.username = author
        authorProfile.image = profile.image ? profile.image[0].contentUrl : false

      } catch (error) {
        console.error(error)
        dispatch(
          fetchFeedFail( error )
        )
      }

    }

    try {
      const url = await blockstack.getUserAppFileUrl('cache.json', `${author}.id.blockstack`, DOMAIN)      
      const response = await fetch(url)
      const json = await response.json()
      dispatch(
        fetchFeedSuccess({
          author: authorProfile,
          ...json
        })
      )
      dispatch( LoaderActions.loaderOff() )
    } catch (error) {
      console.log(error)
      dispatch(
        fetchFeedFail( error )
      )
      dispatch( LoaderActions.loaderOff() )
    }
    
  }
}