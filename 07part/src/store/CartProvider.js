import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {

  // let items = [];
  const [items, updateItems] = useState([]);
  const addItemToCartHandler = (item) => {
    // cartContext.items.push(item);
    updateItems([...items, item]);
    console.log('inside addItemToCartHandler', cartContext);
  };

  const removeItemToCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    message: 'Click here'
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log('inside cartContext', cartContext)}
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider