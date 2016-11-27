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

function signUpImpl(email, password, onSuccess, onError) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function () {
      onSuccess();
    })
    .catch(function(error) {
      onError(error);
    });
}

function signInImpl(email, password, onSuccess, onError) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function () {
      onSuccess();
    })
    .catch(function(error) {
      onError(error);
    });
}

function signOutImpl() {
  firebase.auth().signOut();
}

function getUserDataImpl(user) {
  return {
    email: user.email
  };
}

function isUserAuthenticatedImpl() {
  return firebase.auth().currentUser;
}

window.step2 = {
  _signUp: signUpImpl,
  _signIn: signInImpl,
  _signOut: signOutImpl,
  _getUserData: getUserDataImpl,
  _isUserAuthenticated: isUserAuthenticatedImpl
};