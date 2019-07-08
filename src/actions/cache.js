import * as blockstack from 'blockstack'

const DOMAIN = process.env.DOMAIN

// TYPES
export const GET_MY_CACHE_FAIL = 'GET_MY_CACHE_FAIL'
export const GET_MY_CACHE_PENDING = 'GET_MY_CACHE_PENDING'
export const GET_MY_CACHE_SUCCESS = 'GET_MY_CACHE_SUCCESS'

export const GET_FOREIGN_CACHE_FAIL = 'GET_FOREIGN_CACHE_FAIL'
export const GET_FOREIGN_CACHE_PENDING = 'GET_FOREIGN_CACHE_PENDING'
export const GET_FOREIGN_CACHE_SUCCESS = 'GET_FOREIGN_CACHE_SUCCESS'

// CREATORS
export function getMyCachePending () {
  return {
    type: GET_MY_CACHE_PENDING,
    payload: true
  }
}

export function getMyCacheSuccess (payload) {
  return {
    type: GET_MY_CACHE_SUCCESS,
    payload
  }
}

export function getMyCacheFail (error) {
  return {
    type: GET_MY_CACHE_FAIL,
    payload: error
  }
}

export function getForeignCachePending () {
  return {
    type: GET_FOREIGN_CACHE_PENDING,
    payload: true
  }
}

export function getForeignCacheSuccess (payload) {
  return {
    type: GET_FOREIGN_CACHE_SUCCESS,
    payload
  }
}

export function getForeignCacheFail (error) {
  return {
    type: GET_FOREIGN_CACHE_FAIL,
    payload: error
  }
}

// API CALLS
export async function fetchCache( userToFetch, userIsMe ) {
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

// THUNKS