import React from 'react';
import { withRouter } from 'react-router-dom';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component.jsx';

const CollectionPreview = ({ title, items, history, match }) => {
  return(
    <div className='collection-preview'>
      <h2 className='title' onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)} >{title.toUpperCase()}</h2>
      <div className='preview'>
      {
        items
          .filter((item, idx) => {
          return idx < 4;
          })
          .map(item => {
            return <CollectionItem key={item.id} item={item} />
        })
      } 
      </div>
      
    </div>
  );
};

export default withRouter(CollectionPreview);