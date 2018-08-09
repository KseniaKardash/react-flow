/* @flow */
import React from 'react';
import LogIn from '../LogIn/LogIn';
import './logOut.css';

type Props = {
  isAuthenticated: Function,
  signout: Function
};

const LogOut = (props: Props) => {
  const { isAuthenticated, signout } = props;
  if(isAuthenticated) return <button className="btn-log-out" type="button" onClick={signout}> Log Out </button>;
  else return <LogIn />;
};
export default LogOut;
