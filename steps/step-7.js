/**
 * STEP #7 (ADVANCED) - storage : upload and fetch images
 * ========
 * In this step you will implement the requires functions needed to support full flow of sending images as message.
 * Also, you will add security rules for storage.
 * At the end of this step your app should support upload image, and send it as a message.
 *
 * NOTES:
 * 1) use firebase.storage() and firebase.database() servies.
 * 2) edit `storage.rules` [https://firebase.google.com/docs/storage/security/start] so it will only allows users to upload images to their own folder.
 **/

function buildImageRef(currentUser, file) {
  return (currentUser.uid + '/' + Date.now() + '/' + file.name);
}

function pushImageMessageImpl(messagesRef, imageMessage) {
  return messagesRef.push(imageMessage);
}

function uploadImageToStorageImpl(currentUser, file) {
  return firebase.storage().ref(buildImageRef(currentUser, file))
    .put(file, {contentType: file.type})
}

function updateImageUriImpl(databaseSnapshot, storageSnapshot) {
  var filePath = storageSnapshot.metadata.fullPath;
  return databaseSnapshot.update({
    imageUrl: firebase.storage().ref(filePath).toString()
  });
}

function getDownloadUrlImpl(imageUri) {
  return firebase.storage().refFromURL(imageUri)
    .getMetadata()
    .then(function (metadata) {
      return metadata.downloadURLs[0];
    });
}

window.step7 = {
  _pushImageMessage: pushImageMessageImpl,
  _uploadImageToStorage: uploadImageToStorageImpl,
  _updateImageUri: updateImageUriImpl,
  _getDownloadUrl: getDownloadUrlImpl
};