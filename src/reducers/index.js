/* @flow */
import { combineReducers } from 'redux';
import authentication from './authenticationReducer';
import galery from './galeryReducer';

export default combineReducers({
    authentication,
    galery
});
