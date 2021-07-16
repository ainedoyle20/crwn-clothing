import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component.jsx';

const CollectionPreview = ({ title, items }) => {
  return(
    <div className='collection-preview'>
      <h2 className='title'>{title.toUpperCase()}</h2>
      <div className='preview'>
      {
        items
          .filter((item, idx) => {
          return idx < 4;
          })
          .map(({ id, ...otherProps }) => {
            return <CollectionItem key={id} {...otherProps} />
        })
      } 
      </div>
      
    </div>
  );
};

export default CollectionPreview;