import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history }) => {
  return(
    <div className={`${size ? 'large' : ''} menu-item`} onClick={() => history.push(`shop/${title.toLowerCase()}`)}>
      <div className='background-image' 
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className='content'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);