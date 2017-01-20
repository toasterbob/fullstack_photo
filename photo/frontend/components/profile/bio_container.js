import { connect } from 'react-redux';
import Bio from './bio';


const mapStateToProps = ({ profile, session }) => ({
  profile: profile,
  currentUser: session.currentUser || {}
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bio);
