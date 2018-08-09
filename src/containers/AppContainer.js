/* @flow */
import {connect} from 'react-redux';
import {changeAuthStatus, changeToken} from '../actions/authenticationAction';
import App from '../components/App/App';

const mapStateToProps = (state) => {
  return {isAuthenticated: state.authentication.status};
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeAuthStatus: (status) => dispatch(changeAuthStatus(status)),
    changeToken: (token) => dispatch(changeToken(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
