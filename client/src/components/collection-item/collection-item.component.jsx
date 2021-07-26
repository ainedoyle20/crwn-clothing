import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { 
  CollectionItemContainer, 
  AddItemButton, 
  BackgroundImageContainer, 
  CollectionFooterContainer, 
  CollectionNameContainer, 
  CollectionPriceContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return(
    <CollectionItemContainer>
      <BackgroundImageContainer className='image-container'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></BackgroundImageContainer>
      <CollectionFooterContainer>
        <CollectionNameContainer>{name}</CollectionNameContainer>
        <CollectionPriceContainer>{price}</CollectionPriceContainer>
      </CollectionFooterContainer>
      <AddItemButton 
        onClick={() => addItem(item)}
      inverted>Add to Cart</AddItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);