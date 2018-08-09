/* @flow */
import React from 'react';

const LogIn = () => {
  return (<div className='home-container'>
    <h2>
      {'Welcome to insta^2'}
    </h2>
    <div>
      <a className='link' href="https://www.instagram.com/oauth/authorize/?client_id=670b7b5ecda149eca1ebff001a3feaec&redirect_uri=http://localhost:3000/authorized_user/&scope=public_content&response_type=token">LOG IN</a>
    </div>
  </div>);
};

export default LogIn;
