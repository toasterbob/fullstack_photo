import { RECEIVE_USER } from '../actions/profile_actions';
import merge from 'lodash/merge';

const ProfileReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return oldState;

  }
};

export default ProfileReducer;
