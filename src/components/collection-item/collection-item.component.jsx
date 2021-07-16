import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ name, imageUrl, price }) => {
  return(
    <div className='collection-item'>
      <div className='image-container'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className='collection-footer'>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;