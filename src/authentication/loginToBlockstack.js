import * as blockstack from 'blockstack';

export function getProfileData (user) {
  // take a blockstack user profile data,
  // return the data our user reducer will consume.
  const username = user.username;
  const name = user.profile.name;
  const description = user.profile.description;
  const image = user.profile.image[0].contentUrl

  return {
    username,
    name,
    image,
    description
  }
}

export function signInPending ( userSession ) {
  userSession.handlePendingSignIn().then(function(userData) {
    console.log(userData)
    window.location = window.location.origin
  });
}

export default function loginToBlockstack () {
  const userSession = new blockstack.UserSession()

  if (blockstack.isUserSignedIn()) {

    return userSession;

  } else if (userSession.isSignInPending()) {

    signInPending( userSession )

    // userSession.handlePendingSignIn().then(function(userData) {

    //   console.log(userData)
    //   window.location = window.location.origin

    // });
  }

}