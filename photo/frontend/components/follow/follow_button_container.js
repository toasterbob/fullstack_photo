import { connect } from 'react-redux';
import FollowButton from './follow_button';
import { followUser } from '../../actions/follow_actions';

const mapStateToProps = ({ session, follow }) => ({
  follow: follow,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  followUser: (follow) => dispatch(followUser(follow))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);
