import { connect } from 'react-redux';
import Photo from './photo';
import { uploadPhoto } from '../../actions/photo_actions';

const mapStateToProps = ({ session, photo }) => ({
  photo: photo,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  uploadPhoto: (picture) => dispatch(uploadPhoto(picture))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
