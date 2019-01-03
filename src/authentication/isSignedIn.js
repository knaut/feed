import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { routerActions } from 'react-router-redux';

const locationHelper = locationHelperBuilder({});

export default connectedRouterRedirect({
  // path we want to redirect to
  redirectPath: '/',
  // determines whether the user is signed into blockstack
  authenticatedSelector: state => state.user.isAuthenticated === true,
  wrapperDisplayName: 'IsSignedIn',
  redirectAction: routerActions.replace
});