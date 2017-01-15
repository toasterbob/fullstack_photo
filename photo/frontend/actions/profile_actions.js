import {fetchUser, updatesUser} from '..//util/profile_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_USER = 'RECEIVE_USER';

export const getUser = user => dispatch => (
  fetchUser(user).then(showUser => dispatch(receiveUser(showUser)))
);

export const updateUser = user => dispatch => (
  updatesUser(user).then(changeUser => dispatch(receiveUser(changeUser)))
    .then(hashHistory.push('/profile'))
);

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
