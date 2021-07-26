import React from 'react';
import { connect } from 'react-redux';

import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';

import { CheckoutItemContainer, CheckoutImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, addItem, clearItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return(
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img alt='item' src={imageUrl} />
      </CheckoutImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div  onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10006;</RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  clearItem: item => dispatch(clearItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);