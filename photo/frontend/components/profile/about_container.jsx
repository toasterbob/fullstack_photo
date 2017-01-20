import { connect } from 'react-redux';
import About from './about';
import { getUser, updateUser } from '../../actions/profile_actions';

const mapStateToProps = ({ profile, session }) => ({
  profile: profile,
  currentUser: session.currentUser || {}
});

const mapDispatchToProps = (dispatch) => ({
  getUser: user => dispatch(getUser(user)),
  updateUser: profile => dispatch(updateUser(profile))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
