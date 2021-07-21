import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectItemCount } from '../../redux/cart/cart.selectors';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return(
    <div className='cart-icon' onClick={() => toggleCartHidden()} >
      <ShoppingIcon className='shopping-icon' />
      <div className='item-count'>{itemCount}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectItemCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);