import { connect } from 'react-redux';
import Profile from './profile';
import { getUser } from '../../actions/profile_actions';

const mapStateToProps = ({ profile, session }) => ({
  user: profile.user,
  currentUser: session.currentUser || {} 
});

const mapDispatchToProps = (dispatch) => ({
  getUser: id => dispatch(getUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
