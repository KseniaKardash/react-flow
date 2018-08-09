/* @flow */
import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from '../Home/Home';
import AuthorizedUserContainer from '../../containers/AuthorizedUserContainer';
import GaleryContainer from '../../containers/GaleryContainer';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Fatal from '../Fatal/Fatal';
import './App.css';

const history = createBrowserHistory();

type Props = {
  isAuthenticated: string,
  changeAuthStatus: Function,
  changeToken: Function,
  token: string
};

class App extends Component<Props> {

  componentWillMount() {
    this.authenticate();
  }

  authenticate = () => {
    const {changeAuthStatus, token} = this.props;
    (token !== '')
      ? changeAuthStatus(true)
      : changeAuthStatus(false);
  }

  signout = () => {
    const {changeAuthStatus, changeToken} = this.props;
    changeAuthStatus(false);
    changeToken('');
  }

  render() {
    const {isAuthenticated} = this.props;
    return (<BrowserRouter history={history}>
      <div>
        <ul className="header-container">
          <li>
            <Link to="/">
              {'Home'}
            </Link>
          </li>
          <li>
            <Link to="/galery">
              {'Galery'}
            </Link>
          </li>
        </ul>
        <hr/>
        <div className="main-container">
          <Route exact="exact" path="/" component={(props) => (<Home {...props} authenticate={this.authenticate} isAuthenticated={isAuthenticated} signout={this.signout}/>)}/>
          <PrivateRoute path="/galery" component={GaleryContainer} isAuthenticated={isAuthenticated}/>
          <Route path="/authorized_user" component={(props) => (<AuthorizedUserContainer {...props} authenticate={this.authenticate}/>)}/>
          <Route path="/fatal" component={(props) => (<Fatal {...props}/>)}/>
        </div>
      </div>
    </BrowserRouter>);
  }
};

export default App;
