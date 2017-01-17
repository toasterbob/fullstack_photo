import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS, DELETE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const PhotoReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PHOTO:
      return action.photo;
    case RECEIVE_ALL_PHOTOS:
      return action.photos;
    case DELETE_PHOTO:
      let newState = merge({}, oldState);
      delete newState[action.photo.id];
      return newState;
    default:
      return oldState;

  }
};

export default PhotoReducer;
