/**
 * STEP #2 - authentication
 * ========
 * In this step you will implement the require functions of authentication using firebase.auth() service.
 * The other two methods (getUserDataImpl, isUserAuthenticatedImpl) are needed to support other authentication flows used by app's core logic.
 * At the end of this step your app should fully support sign-up (i.e. register new user), sign-in and sign-out.
 *
 * NOTES:
 * 1) use firebase.auth() service.
 **/

// TODO(docs) - https://firebase.google.com/docs/auth/web/password-auth

function signUpImpl(email, password, onSuccess, onError) {
  // TODO(dev) - create a new user with email and password
}

function signInImpl(email, password, onSuccess, onError) {
  // TODO(dev) - sign in an existing user with email and password
}

function signOutImpl() {
  // TODO(dev) - sign out an existing user
}

function getUserDataImpl(user) {
  // TODO(dev) - return user's email
  return {
    email: null
  };
}

function isUserAuthenticatedImpl() {
  // TODO(dev) - return true/false if user is currently authenticated
}

window.step2 = {
  _signUp: signUpImpl,
  _signIn: signInImpl,
  _signOut: signOutImpl,
  _getUserData: getUserDataImpl,
  _isUserAuthenticated: isUserAuthenticatedImpl
};