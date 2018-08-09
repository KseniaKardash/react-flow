/* @flow */
import {connect} from 'react-redux';
import {itemsFetchData, tagChanged, descriptionChanged, changeOrderSortingLikes} from '../actions/galeryAction';
import Galery from '../components/Galery/Galery';

const mapStateToProps = (state) => {
  return {
    items: state.galery.items,
    hasErrored: state.galery.itemsHasErrored,
    isLoading: state.galery.itemsIsLoading,
    tag: state.galery.tag,
    description: state.galery.description,
    orderSortingLikes: state.galery.orderSortingLikes,
    authStatus: state.authentication.status,
    authToken: state.authentication.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    itemsFetchData: () => dispatch(itemsFetchData()),
    tagChanged: (text) => dispatch(tagChanged(text)),
    descriptionChanged: (text) => dispatch(descriptionChanged(text)),
    changeOrderSortingLikes: (text) => dispatch(changeOrderSortingLikes(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Galery);
