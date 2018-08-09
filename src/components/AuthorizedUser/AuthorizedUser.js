/* @flow */
import React, {Component} from 'react';
import './AuthorizedUser.css';
import {Link} from 'react-router-dom';

type Props = {
  authenticate: Function,
  changeToken: Function,
  location: any
};

class AuthorizedUser extends Component<Props> {

  componentDidMount() {
    this.getToken();
    const {authenticate} = this.props;
    authenticate();
  }

  getToken = () => {
    const {location} = this.props;
    const {hash} = location;
    const {changeToken} = this.props;
    if (hash !== "") {
      const token = hash.substring(hash.indexOf('=') + 1, hash.length);
      changeToken(token);
    }
  };
  render() {
    return (<div className='container'>
      <h2>You successfully were authorized!</h2>
      <div>
        <p>All photos in
          <Link to="/galery">
            <span className='mark-out'>
              {' galery...'}</span>
          </Link>
        </p>
      </div>
    </div>);
  }
};

export default AuthorizedUser;
