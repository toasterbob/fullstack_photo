import { connect } from 'react-redux';
import Profile from './profile';
import { getUser } from '../../actions/profile_actions';

const mapStateToProps = ({ profile, session }) => ({
  profile: profile,
  currentUser: session.currentUser || {}
});

const mapDispatchToProps = (dispatch) => ({
  getUser: user => dispatch(getUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
