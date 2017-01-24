import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import Title from './title';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  guestUser: user => dispatch(login({username: "guest", password: "password"}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);
