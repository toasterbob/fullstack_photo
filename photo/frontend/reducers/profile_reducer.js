import { RECEIVE_USER } from '../actions/profile_actions';
import {  RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import merge from 'lodash/merge';

const ProfileReducer = (oldState = {}, action) => {
  let newState;
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_FOLLOW:
      newState = merge({}, oldState);
      newState.followed = true;
      return newState;
    case REMOVE_FOLLOW:
      newState = merge({}, oldState);
      newState.followed = false;
      return newState;
    default:
      return oldState;

  }
};

export default ProfileReducer;
