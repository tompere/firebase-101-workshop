/**
 * STEP #2 - authentication
 * ========
 * NOTES:
 * you can use 'firebase' object
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