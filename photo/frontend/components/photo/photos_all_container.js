import { connect } from 'react-redux';
import PhotosAll from './photos_all';
import { getAllPhotos } from '../../actions/photo_actions';

const mapStateToProps = ({ session, photo }) => ({
  photo: photo,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getPhotos: () => dispatch(getAllPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosAll);
