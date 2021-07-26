import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollectionPageCollection } from '../../redux/shop/shop.selectors';

import { CollectionPageContainer, CollectionPageTitle, CollectionItemsContainer } from './collection.styles';


const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionPageTitle>{title}</CollectionPageTitle>
      <CollectionItemsContainer>
      {
        items.map((item) => <CollectionItem key={item.id} item={item} />)
      }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionPageCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);