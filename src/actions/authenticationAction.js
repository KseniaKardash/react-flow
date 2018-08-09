/* @flow */
import {
  SET_AUTHENTICATION_STATUS,
  SET_AUTHENTICATION_TOKEN
}
from '../constants/constants';

export function changeAuthStatus(status: boolean) {
  return {
    type: SET_AUTHENTICATION_STATUS,
    status
   };
}

export function changeToken(token: string) {
  return {
    type: SET_AUTHENTICATION_TOKEN,
    token
   };
}
