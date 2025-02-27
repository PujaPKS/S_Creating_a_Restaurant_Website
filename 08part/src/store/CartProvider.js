import React, { useReducer, useState } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    
    if(existingCartItem) {
      const updatedItem ={
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    else{
      // updatedItem = {...action.item};
      updatedItems = state.items.concat(action.item);
    }

    // const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if(action.type === 'REMOVE') {
    
    const exisytingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[exisytingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if(existingItem.amount === 1){
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    else{
      const updatedItem = {...existingItem, amount: existingItem.amount - 1};
      updatedItems = [...state.items];
      updatedItems[exisytingCartItemIndex] = updatedItem;
    }

    return{
      items: updatedItems,
      totalAmount: updatedTotalAmount
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