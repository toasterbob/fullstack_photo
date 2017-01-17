import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const DELETE_PHOTO = "REMOVE_PHOTO";

export const uploadPhoto = picture => dispatch => (
  PhotoApiUtil.uploadPic(picture)
      .then(photo => dispatch(receivePhoto(photo)))
);

export const getAllPhotos = photos => dispatch => (
  PhotoApiUtil.getAllPhotos(photos)
      .then(pictures => dispatch(receiveAllPhotos(pictures)))
);

export const getPhoto = (photo) => dispatch => (
  PhotoApiUtil.getPhoto(photo)
      .then(picture => dispatch(receivePhoto(picture)))
);

export const removePhoto = (photo) => dispatch => (
  PhotoApiUtil.removePhoto(photo)
      .then(picture => dispatch(deletePhoto(picture)))
);

const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

const deletePhoto = photo => ({
  type: DELETE_PHOTO,
  photo
});
