import { connect } from 'react-redux';
import PhotosUser from './photos_user';
import { getAllPhotos } from '../../actions/photo_actions';

const mapStateToProps = ({ session, photo }) => ({
  photo: photo,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getPhotos: (id) => dispatch(getAllPhotos(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosUser);
