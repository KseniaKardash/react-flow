/* @flow */
import React, {Component} from 'react';
import './galery.css';
import memoize from 'memoize-one';
import TopBar from '../TopBar/TopBar';

type Props = {
  hasErrored: Function,
  isLoading: Function,
  orderSortingLikes: string,
  items: Array<any>,
  description: string,
  tag: string,
  descriptionChanged: Function,
  tagChanged: Function,
  changeOrderSortingLikes: Function,
  itemsFetchData: Function
};

class Galery extends Component<Props> {

  sortLikes = memoize((posts, orderSortingLikes) => {
    let index;
    index = (orderSortingLikes === "lowToHigh")
      ? 1
      : -1;
    posts.sort(function(current, previous) {
      if (current.likes.count > previous.likes.count) {
        return -1 * index;
      }
      if (current.likes.count < previous.likes.count) {
        return 1 * index;
      }
      return 0;
    });
  });

  filterDescription = memoize((posts, searchDescription) => {
    return posts.filter((image) => {
      return image.caption.text.indexOf(searchDescription) !== -1;
    });
  });

  filterTag = memoize((posts, searchTag) => {
    return posts.filter((image) => {
      return image.caption.text.indexOf(`#${searchTag}`) !== -1;
    });
  });

  componentWillMount() {
    const {itemsFetchData} = this.props;
    itemsFetchData().next();
  }
  render() {

    const {
      hasErrored,
      isLoading,
      orderSortingLikes,
      items,
      description,
      tag,
      descriptionChanged,
      tagChanged,
      changeOrderSortingLikes
    } = this.props;

    let filteredImages = this.filterDescription(items, description);

    this.sortLikes(filteredImages, orderSortingLikes);
    if (tag !== "") {
      filteredImages = this.filterTag(filteredImages, tag);
   }

    switch (true) {
      case hasErrored:
        return <p>There was an error loading the items</p>;
      case isLoading:
        return <p>Loading…</p>;
      default:
        return (<div className="galery">
          <TopBar descriptionChanged={descriptionChanged} tagChanged={tagChanged} changeOrderSortingLikes={changeOrderSortingLikes} tag={tag} orderSortingLikes={orderSortingLikes} description={description}/>
          {
            filteredImages.map((item) => (<div key={item.id} className="galery-container">
              <img src={item.images.standard_resolution.url} className="galery-container-photo" alt="instaPhoto"/>
              <p className="galery-container-likes">LIKES: {item.likes.count}</p>
              <p className="galery-container-description">{item.caption.text}</p>
            </div>))
          }
        </div>);
    }
  }
}
export default Galery;
