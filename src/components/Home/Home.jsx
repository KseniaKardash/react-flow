/* @flow */
import React from 'react';
import './home.css';
import LogOut from '../LogOut/LogOut';
import LogIn from '../LogIn/LogIn';

type Props = {
  isAuthenticated: Function,
  signout: Function
};

const Home = (props: Props) => {

  const { isAuthenticated, signout } = props;
  if (isAuthenticated) {
    return <LogOut isAuthenticated={isAuthenticated} signout={signout}/>;
  } else {
    return <LogIn/>;
  }
};

export default Home;
