/**
 * STEP #1 - initialize firebase in your app
 * ========
 * In this step you will initialize the firebase client SDK - add all needed keys and urls (taken directly with firebase admin console),
 * and invoke the three firebase services: auth, database and services.
 * At the end of this step your app should be loaded without any alerts / browser console error messages:
 *
 * Instructions:
 * 1) CREATE NEW PROJECT in [https://console.firebase.google.com/]
 * 2) Enable email authentication (left menu tab > Authentication > 'Sign-in Methods' top tab)
 * 3) get configuration data (top left menu tab > 'Add firebase to your webapp')
 * ========
 * NOTES:
 * 1) you can use 'firebase' object
 **/

// TODO(docs) - https://firebase.google.com/docs/web/setup#add_firebase_to_your_app

function initImpl() {
  // TODO(dev) - configure firebase app
  var configObject = {};
  return configObject;
}

function initServicesImpl() {
  // TODO(dev) - initialize firebase core services
  var servicesObject = {
    auth: null,
    database: null,
    storage: null
  };
  return servicesObject;
}

window.step1 = {
  _init: initImpl,
  _initServices: initServicesImpl
};