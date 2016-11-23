/**
 * STEP #3 - real-time database : read messages
 * ========
 * In this step you will create a database endpoint reference and query it (i.e. read data).
 * This will also include attaching data events listeners, and extract data from query result.
 * At the end of this step your app should show dummy messages in chat window (see below).
 *
 * NOTES:
 * 1) you should import 'initial_messages.json' to firebase console (database tab).
 * 2) use firebase.database() service.
 **/

// TODO(docs) - https://firebase.google.com/docs/database/web/read-and-write

function createMessagesRefImpl() {
  // TODO(dev) - return database 'messages' endpoint reference
}

function convertDataToMessageObject(data) {
  // TODO(dev) - extract value from data object, and convert to message object
  var messageObject = {
    uniqueKey: data.key,
    userDisplayName: null,
    messageText: null,
    userPhotoUrl: null,
    messageImageUrl: null
  };
  return messageObject;
}

function loadMessagesAndAttachListenersImpl(messagesRef, loadLimitNum, events, setMessage) {
  // TODO(dev) - query last 'loadLimitNum' messages and attach listeners for all 'events'. apply 'setMessage' callback on returned result.
  // TODO(hint) - use `convertDataToMessageObject` above with setMessage callback
}

function clearListenersImpl(messagesRef) {
  // TODO(dev) - detach all listeners database 'messages' reference
}

window.step3 = {
  _createMessagesRef: createMessagesRefImpl,
  _clearListeners: clearListenersImpl,
  _loadMessagesAndAttachListeners: loadMessagesAndAttachListenersImpl
};