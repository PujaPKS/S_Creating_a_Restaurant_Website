import React, { Fragment, useContext } from 'react';
import './HeaderCartButton.css';
import CartContext from '../../../store/CartContext';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  let numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + Number(item.amount);
  }, 0);


  return (
    <Fragment>
      <button className='button' onClick={props.onClick}>
        <i className="fas fa-cart-shopping" style={{ color: "#ffffff" }} />
        <span>Your Cart</span>
        {/* <span>{cartCtx.message}</span> */}
        <span className="cart-badge">{numberOfCartItems}</span>
      </button>
    </Fragment>
  )
}

export default HeaderCartButton