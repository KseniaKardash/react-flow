/* @flow */
import {store} from '../store/store';

import {
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_LOADING,
  FETCH_ITEMS_SUCCESS,
  SET_TAG,
  SORT_LIKES_BY,
  SET_DESCRIPTION
}
from '../constants/constants';
import INSTAGRAM_API from '../constants/links';

export function itemsHasErrored(bool: boolean) {
    return {
        type: FETCH_ITEMS_FAILURE,
        hasErrored: bool
    };
}

export function itemsIsLoading(bool: boolean) {
    return {
        type: FETCH_ITEMS_LOADING,
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items: Array<any>) {
    return {
        type: FETCH_ITEMS_SUCCESS,
        items
    };
}

export function tagChanged(value: string) {
  return {
    type: SET_TAG,
    tag: value
   };
}

export function descriptionChanged(value: string) {
  return {
    type: SET_DESCRIPTION,
    description: value
   };
}

export function changeOrderSortingLikes(value: string) {
  return {
    type: SORT_LIKES_BY,
    orderSortingLikes: value
   };
}

export const itemsFetchData = () => (function* (dispatch: any): Generator<*, *, *> {
  dispatch(itemsIsLoading(true));
  try {
    const token = store.getState().authentication.token;
    yield fetch(`${INSTAGRAM_API}/users/self/media/recent/?access_token=${token}`)
    .then((response) => response.json())
    .then((response) =>  dispatch(itemsFetchDataSuccess(response.data)))
    .then(() => dispatch(itemsIsLoading(false)));
  } catch (error) {
    dispatch(itemsHasErrored(true));
  };
});
