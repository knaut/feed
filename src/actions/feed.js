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

    console.log({payload, state})

    const userToFetch = payload.author

    try {
      const url = await blockstack.getUserAppFileUrl('cache.json', `${userToFetch}.id.blockstack`, DOMAIN)      
      const response = await fetch(url)
      const json = await response.json()
      dispatch(
        fetchFeedSuccess( json )
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