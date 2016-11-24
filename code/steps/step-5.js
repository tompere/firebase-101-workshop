/**
 * STEP #5 - storage : upload and fetch images
 * ========
 * NOTES:
 * you can use 'firebase' object
 **/

function pushImageMessageImpl(messagesRef, imageMessage) {
  return messagesRef.push(imageMessage);
}

function uploadImageToStorageImpl(currentUser, file) {
  return firebase.storage().ref(currentUser.uid + '/' + Date.now() + '/' + file.name)
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

window.step5 = {
  _pushImageMessage: pushImageMessageImpl,
  _uploadImageToStorage: uploadImageToStorageImpl,
  _updateImageUri: updateImageUriImpl,
  _getDownloadUrl: getDownloadUrlImpl
};