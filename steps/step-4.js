/**
 * STEP #4 - real-time database : writes messages
 * ========
 * In this step you will push a new message to database endpoint reference (i.e. write data).
 * At the end of this step your app should be able to send a message and show it in chat window.
 *
 * NOTES:
 * 1) use firebase.database()
 **/

// TODO(docs) - https://firebase.google.com/docs/database/web/read-and-write

function pushMessageImpl(messagesRef, message, onSuccess, onError) {
  // TODO(dev) - push new message, use callbacks (onSuccess, onError) when needed, and return promise
}

window.step4 = {
  _pushMessage: pushMessageImpl
};