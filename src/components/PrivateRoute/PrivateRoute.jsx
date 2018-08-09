/* @flow */
import React from 'react';
import {Redirect, Route} from 'react-router-dom';

type Props = {
  isAuthenticated: string,
  component: any
};

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}: Props) => (<Route {...rest} render={() => (
    isAuthenticated === true
    ? <Component/>
    : <Redirect to='/fatal'/>)}/>);

export default PrivateRoute;
