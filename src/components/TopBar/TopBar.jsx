/* @flow */
import React from 'react';
import './TopBar.css';

type Props = {
  descriptionChanged: Function,
  tagChanged: Function,
  changeOrderSortingLikes: Function,
  orderSortingLikes: string,
  tag: string,
  description: string
};

const TopBar = (props: Props) => {

  const changeOrderSortingLikes = ({target}) => {
    props.changeOrderSortingLikes(target.value);
  };

  const tagChanged = ({target}) => {
    props.tagChanged(target.value);
  };

  const descriptionChanged = ({target}) => {
    props.descriptionChanged(target.value);
  };

const {tag, orderSortingLikes, description} = props;
  return (
    <div className="top-bar-container">
      <div className="top-bar-div">
        <p>SORT LIKES:</p>
        <select className="top-bar-select" value={orderSortingLikes} onChange={changeOrderSortingLikes}>
          <option value="highToLow" >
            high to low
          </option>
          <option value="lowToHigh" >
            low to high
          </option>
        </select>
      </div>
      <div className="top-bar-div">
        <p>SEARCH TAG:</p>
        <input type="text" placeholder="tag" className="top-bar-input" name="tag" value={tag} onChange={tagChanged}/>
      </div>
      <div className="top-bar-div">
        <p>SEARCH DESCRIPTION:</p>
        <input type="text" placeholder="description" className="top-bar-input" name="description" value={description} onChange={descriptionChanged}/>
      </div>
    </div>
  );
};

export default TopBar;
