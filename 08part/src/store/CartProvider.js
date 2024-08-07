import React, { useReducer, useState } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
}

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id})
  };

  const cartContext = {
    // items: items,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    message: 'Click here'
  };

  return (
    <CartContext.Provider value={cartContext}>
      {/* {console.log('inside cartContext', cartContext)} */}
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider