import { RECEIVE_FOLLOW } from '../actions/follow_actions';
import merge from 'lodash/merge';

const FollowReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_FOLLOW:
      return oldState.concat([action.follow]);
    default:
      return oldState;

  }
};

export default FollowReducer;
