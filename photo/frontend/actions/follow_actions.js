import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";

export const followUser = follow => dispatch => (
  FollowApiUtil.followUser(follow)
      .then(following => dispatch(receiveFollow(following)))
);

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});
