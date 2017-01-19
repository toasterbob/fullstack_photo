import { connect } from 'react-redux';
import Feed from './feed';
import { getFeedPhotos } from '../../actions/photo_actions';

const mapStateToProps = ({ session, photo }) => ({
  photo: photo,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getPhotos: () => dispatch(getFeedPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
