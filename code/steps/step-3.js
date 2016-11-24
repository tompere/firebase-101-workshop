/**
 * STEP #3 - real-time database : read messages
 * ========
 * 1) import 'initial_messages.json' to firebase console (database tab)
 * ========
 * NOTES:
 * you can use 'firebase' object
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