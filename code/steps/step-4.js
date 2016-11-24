/**
 * STEP #4 - real-time database : writes messages
 * ========
 * NOTES:
 * you can use 'firebase' object
 **/

function pushMessageImpl(messagesRef, message, onSuccess, onError) {
  return messagesRef.push(message)
    .then(onSuccess)
    .catch(onError);
}

window.step4 = {
  _pushMessage: pushMessageImpl
};