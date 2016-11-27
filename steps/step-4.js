/**
 * STEP #4 - real-time database : writes messages
 * ========
 * In this step you will push a new message to database endpoint reference (i.e. write data).
 * At the end of this step your app should be able to send a message and show it in chat window.
 *
 * NOTES:
 * 1) use firebase.database()
 **/

function pushMessageImpl(messagesRef, message, onSuccess, onError) {
  return messagesRef.push(message)
    .then(onSuccess)
    .catch(onError);
}

window.step4 = {
  _pushMessage: pushMessageImpl
};