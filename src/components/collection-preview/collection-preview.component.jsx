import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component.jsx';

import 
{ CollectionPreviewContainer, PreviewCollectionTitle, PreviewContainer } from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match }) => {
  return(
    <CollectionPreviewContainer>
      <PreviewCollectionTitle onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)} >{title.toUpperCase()}</PreviewCollectionTitle>
      <PreviewContainer>
      {
        items
          .filter((item, idx) => {
          return idx < 4;
          })
          .map(item => {
            return <CollectionItem key={item.id} item={item} />
        })
      } 
      </PreviewContainer>
      
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);