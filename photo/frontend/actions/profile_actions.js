import {fetchUser} from '..//util/profile_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const getUser = user => dispatch => (
  fetchUser(user).then(user => dispatch(receiveUser))
);

const receiveUser = user => ({
  RECEIVE_USER,
  user
});
