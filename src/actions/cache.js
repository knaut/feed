import Cache from '../models/Cache'

// ACTIONS
import * as LoaderActions from './loader'

const DEBUG = process.env.DEBUG

// TYPES
export const GET_CACHE_SUCCESS = 'GET_CACHE_SUCCESS'
export const GET_CACHE_PENDING = 'GET_CACHE_PENDING'
export const GET_CACHE_FAIL = 'GET_CACHE_FAIL'

export const START_CACHE_SUCCESS = 'START_CACHE_SUCCESS'
export const START_CACHE_PENDING = 'START_CACHE_PENDING'
export const START_CACHE_FAIL = 'START_CACHE_FAIL'

// CREATORS
export function getCacheSuccess( payload ) {
  return {
    type: GET_CACHE_SUCCESS,
    payload
  }
}

export function getCachePending( payload ) {
  return {
    type: GET_CACHE_PENDING,
    payload
  }
}

export function getCacheFail( payload ) {
  return {
    type: GET_CACHE_FAIL,
    payload
  }
}

export function startCacheSuccess( payload ) {
  return {
    type: START_CACHE_SUCCESS,
    payload
  }
}

export function startCachePending( payload ) {
  return {
    type: START_CACHE_PENDING,
    payload
  }
}

export function startCacheFail( payload ) {
  return {
    type: START_CACHE_FAIL,
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
    dispatch(
      getCachePending()
    )
    const cache = await Cache.getCache()

    if (cache) {
      dispatch(
        getCacheSuccess( cache )
      )
    } else {
      dispatch(
        getCacheFail()
      )
    }

  }
}

export function startCacheThunk( payload ) {
  return async function( dispatch, getState ) {
    dispatch(
      startCachePending()
    )

    const response = await Cache.startCache()
    
    if (DEBUG) console.log(`startCache:`, response)

    if (response) {

      const cache = await Cache.getCache()

      if (cache) {
        dispatch(
          startCacheSuccess( cache )
        )
      } else {
        dispatch(
          startCacheFail()
        )
      }

    } else {
      dispatch(
        startCacheFail()
      )
    }

    

  }
}

