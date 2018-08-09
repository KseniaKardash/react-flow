/* @flow */
import {
  SET_AUTHENTICATION_STATUS,
  SET_AUTHENTICATION_TOKEN
}
from '../constants/constants';

const authInitialState = {
  token: '',
  status: ''
};

type StatusAction = { type: "SET_AUTHENTICATION_TOKEN", token: string };
type TokenAction = { type: "SET_AUTHENTICATION_STATUS", status: boolean };

type Action = StatusAction | TokenAction;

export default function authentication(state: Object = authInitialState , action: Action) {
  switch (action.type) {
    case SET_AUTHENTICATION_STATUS:
      return {
        ...state,
        status: action.status
      };
    case SET_AUTHENTICATION_TOKEN:
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
}
