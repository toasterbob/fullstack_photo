import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header';
import { uploadPhoto } from '../../actions/photo_actions';

const mapStateToProps = ({ session, photo }) => ({
  photo: photo,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  uploadPhoto: (photo) => dispatch(uploadPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
