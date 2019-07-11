import Cache from '../models/Cache'

const DEBUG = process.env.DEBUG

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
