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

// TODO(docs) - https://firebase.google.com/docs/storage/web/


function buildImageRef(currentUser, file) {
  return (currentUser.uid + '/' + Date.now() + '/' + file.name);
}

function pushImageMessageImpl(messagesRef, imageMessage) {
  // TODO(dev) - push new image message and return promise
}

function uploadImageToStorageImpl(currentUser, file) {
  // TODO(dev) - upload new image to storage, and return promise
  // TODO(hint) - use internal `buildImageRef` method to build storage ref id (string)
}

function updateImageUriImpl(databaseSnapshot, storageSnapshot) {
  // TODO(dev) - upload new image to storage, and return promise
  // TODO(hint) - use 'storageSnapshot' to get image storage filePath
  // TODO(hint) - use `databaseSnapshot` ref to update property `imageUrl` value
}

function getDownloadUrlImpl(imageUri) {
  // TODO(dev) - extract real download url for image, based on given `imageUri`, and return promise
  // TODO(hint) - look at `refFromURL` API in docs
  // TODO(hint) - look at `getMetadata` API in docs
}

window.step7 = {
  _pushImageMessage: pushImageMessageImpl,
  _uploadImageToStorage: uploadImageToStorageImpl,
  _updateImageUri: updateImageUriImpl,
  _getDownloadUrl: getDownloadUrlImpl
};