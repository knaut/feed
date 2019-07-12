import Cache from '../models/Cache'

// ACTIONS
import * as LoaderActions from './loader'

const DEBUG = process.env.DEBUG

// TYPES
export const GET_CACHE_SUCCESS = 'GET_CACHE_SUCCESS'
export const GET_CACHE_FAIL = 'GET_CACHE_FAIL'

// CREATORS
export function getCacheSuccess( payload ) {
  return {
    type: GET_CACHE_SUCCESS,
    payload
  }
}

export function getCacheFail( payload ) {
  return {
    type: GET_CACHE_FAIL,
    payload
  }
}

// API HELPERS
export const listFiles = async (userSession) => {
  try {
    const files = await userSession.listFiles(file => {
      return file ? file : false
    })

    if (DEBUG) console.log(`listFiles:`, files)
    
    return files  

  } catch (error) {
    if (DEBUG) console.error(error)

    return false
  }
  
}

export const startCache = async (username) => {
  try {
    const response = await Cache.startCache()
    
    if (DEBUG) console.log(`startCache:`, response)

    return response

  } catch (error) {
    if (DEBUG) console.error(error)
      
    return false
  }
}

export const fetchCache = async () => {
  try {
    const cache = await Cache.getCache()

    if (DEBUG) console.log(`getCache method response:`, cache)

    return cache

  } catch (error) {
    if (DEBUG) console.error(error)
      
    return false
  }
}

// THUNKS
export function fetchCacheThunk( payload ) {
  return async function( dispatch, getState ) {
    dispatch( LoaderActions.loaderOn() )

    const cache = await fetchCache()

    if (cache) {
      dispatch(
        getCacheSuccess( cache )
      )
      dispatch( LoaderActions.loaderOff() )
    } else {
      dispatch(
        getCacheFail()
      )
      dispatch( LoaderActions.loaderOff() )
    }

  }
}

