import React from 'react';

import { CartItemContainer, CartItemImage, ItemDetailsContainer }  from './cart-item.styles';

const CartItem = ({ item: {name, price, quantity, imageUrl} }) => {
  return(
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='item'/>
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;