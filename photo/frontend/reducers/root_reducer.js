import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';
import PhotoReducer from './photo_reducer';
import FollowReducer from './follow_reducer';

const rootReducer = combineReducers ({
  session: SessionReducer,
  profile: ProfileReducer,
  photo: PhotoReducer,
  follow: FollowReducer
});

export default rootReducer;
