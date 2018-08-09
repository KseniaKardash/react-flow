/* @flow */
import React from 'react';
import './fatal.css';

const Fatal = () => {
  return (<div className='fatal-container'>
    <h2>For access to gallery you need to be authorized.</h2>
    <div>
      <a className='link' href="https://www.instagram.com/oauth/authorize/?client_id=670b7b5ecda149eca1ebff001a3feaec&redirect_uri=http://localhost:3000/authorized_user/&scope=public_content&response_type=token">LOG IN</a>
    </div>
  </div>);
};

export default Fatal;
