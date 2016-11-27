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

function createMessagesRefImpl() {
  return firebase.database().ref('messages');
}

function clearListenersImpl(messagesRef) {
  messagesRef.off();
}

function convertDataToMessageObject(data) {
  var value = data.val();
  var messageObject = {
    uniqueKey: data.key,
    userDisplayName: value.name,
    messageText: value.text,
    userPhotoUrl: value.photoUrl,
    messageImageUrl: value.imageUrl
  };
  return messageObject;
}

function loadMessagesAndAttachListenersImpl(messagesRef, loadLimitNum, events, setMessage) {
  for (var i=0; i<events.length; i++) {
    messagesRef.limitToLast(loadLimitNum);
    messagesRef.on(events[i], function (data) {
      setMessage(convertDataToMessageObject(data))
    });
  }
}

window.step3 = {
  _createMessagesRef: createMessagesRefImpl,
  _clearListeners: clearListenersImpl,
  _loadMessagesAndAttachListeners: loadMessagesAndAttachListenersImpl
};