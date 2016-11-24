/**
 * STEP #1 - initialize firebase in your app
 * ========
 * 1) CREATE NEW PROJECT in [https://console.firebase.google.com/]
 * 2) Enable email authentication (left menu tab > Authentication > 'Sign-in Methods' top tab)
 * 3) get configuration data (top left menu tab > 'Add firebase to your webapp')
 * ========
 * NOTES:
 * you can use 'firebase' object
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