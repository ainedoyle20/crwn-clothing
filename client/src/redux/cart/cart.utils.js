export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => {
    return cartItem.id === itemToAdd.id
  });

  if (existingCartItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === itemToAdd.id 
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    });
  };

  return [...cartItems, {...itemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, itemToClear) => {
  return cartItems.filter(cartItem => {
    return cartItem.id !== itemToClear.id
  });
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  if (itemToRemove.quantity === 1) {
    return cartItems.filter(cartItem => {
      return cartItem.id !== itemToRemove.id
    });
  } else {
    return cartItems.map(cartItem => {
      return cartItem.id === itemToRemove.id ? 
        {...cartItem, quantity: cartItem.quantity -1 }
        : cartItem
    });
  };
};
