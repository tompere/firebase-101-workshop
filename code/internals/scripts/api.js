window.api = {
  initApp: step1._init,
  initServices: step1._initServices,
  signUp: step2._signUp,
  signIn: step2._signIn,
  signOut: step2._signOut,
  getUserData: step2._getUserData,
  isUserAuthenticated: step2._isUserAuthenticated,
  createMessagesRef: step3._createMessagesRef,
  clearListeners: step3._clearListeners,
  loadMessagesAndAttachListeners: step3._loadMessagesAndAttachListeners,
  pushMessage: step4._pushMessage
};