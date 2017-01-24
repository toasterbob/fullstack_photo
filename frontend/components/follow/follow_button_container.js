import { connect } from 'react-redux';
import FollowButton from './follow_button';
import { followUser, unfollowUser } from '../../actions/follow_actions';

const mapStateToProps = ({ session, follow, profile }) => ({
  profile: profile,
  follow: follow,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  followUser: (follow) => dispatch(followUser(follow)),
  unfollowUser: (id) => dispatch(unfollowUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);
