/* @flow */
import {connect} from 'react-redux';
import {changeToken} from '../actions/authenticationAction';
import AuthorizedUser from '../components/AuthorizedUser/AuthorizedUser';

const mapStateToProps = (state) => {
  return {isAuthenticated: state.authentication.status};
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeToken: (token) => dispatch(changeToken(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedUser);
