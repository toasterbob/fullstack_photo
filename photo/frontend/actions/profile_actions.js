import {fetchUser} from '..//util/profile_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const getUser = user => dispatch => (
  fetchUser(user).then(showUser => dispatch(receiveUser(showUser)))
);

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
