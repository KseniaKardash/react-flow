/* @flow */
import {
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_LOADING,
  FETCH_ITEMS_SUCCESS,
  SET_TAG,
  SORT_LIKES_BY,
  SET_DESCRIPTION
} from '../constants/constants';

const galeryInitialState = {
  hasErrored: false,
  isLoading: false,
  items: [],
  tag: '',
  orderSortingLikes: '',
  description: ''
};

type FailureAction = { type: "FETCH_ITEMS_FAILURE", hasErrored: boolean };
type LoadingAction = { type: "FETCH_ITEMS_LOADING", isLoading: boolean };
type SuccessAction = { type: "FETCH_ITEMS_SUCCESS", items: Array<any> };
type TagAction = { type: "SET_TAG", tag: string };
type LikesAction = { type: "SORT_LIKES_BY", orderSortingLikes: string };
type DescriptionAction = { type: "SET_DESCRIPTION", description: string };

type Action = FailureAction | LoadingAction | SuccessAction | TagAction | LikesAction | DescriptionAction;


export default function galery(state: Object = galeryInitialState, action: Action) {
  switch (action.type) {
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        hasErrored: action.hasErrored
      };
    case FETCH_ITEMS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.items
      };
    case SET_TAG:
      return {
        ...state,
        tag: action.tag
      };
    case SORT_LIKES_BY:
      return {
        ...state,
        orderSortingLikes: action.orderSortingLikes
      };
    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.description
      };
    default:
      return state;
  }
}
