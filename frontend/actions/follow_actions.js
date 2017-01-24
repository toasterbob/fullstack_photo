import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const followUser = follow => dispatch => (
  FollowApiUtil.followUser(follow)
      .then(following => dispatch(receiveFollow(following)))
);

export const unfollowUser = id=> dispatch => (
  FollowApiUtil.unfollowUser(id)
      .then(following => dispatch(removeFollow(following)))
);



const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});
