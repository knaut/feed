import * as blockstack from 'blockstack'

const DEBUG = process.env.DEBUG

const getLocalBlockstackUser = () => {
  /*
    optimistically check it the local user is logged into blockstack.
    if not, return falsey.
    if yes, return their local user data.
  */
  
    const session = new blockstack.UserSession()
    const isSignedIntoBlockstack = session.isUserSignedIn()
    const isSignInPending = session.isSignInPending()

  try {
    const userData = session.loadUserData()

    return {
      isSignedIntoBlockstack,
      isSignInPending,
      userData
    }
  } catch (error) {
    if (DEBUG) console.error(error)

    return {
      isSignedIntoBlockstack,
      isSignInPending,
      userData: false
    }
  }
}

export default getLocalBlockstackUser