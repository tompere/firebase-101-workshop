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

function initImpl() {
  var configObject = {
    apiKey: "AIzaSyBEglKPTenXkYUgOyofHUmrpiAzPvBNy6w",
    authDomain: "fir-workshop-demo.firebaseapp.com",
    databaseURL: "https://fir-workshop-demo.firebaseio.com",
    storageBucket: "fir-workshop-demo.appspot.com",
    messagingSenderId: "623437438739"
  };
  firebase.initializeApp(configObject);
  return configObject;
}

function initServicesImpl() {
  var servicesObject = {
    auth: firebase.auth(),
    database: firebase.database(),
    storage: firebase.storage()
  };
  return servicesObject;
}

window.step1 = {
  _init: initImpl,
  _initServices: initServicesImpl
};