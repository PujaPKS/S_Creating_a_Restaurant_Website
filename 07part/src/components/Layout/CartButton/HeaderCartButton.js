import React, { Fragment, useContext } from 'react';
import './HeaderCartButton.css';
import CartContext from '../../../store/CartContext';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  let quantity = 0;
  cartCtx.items.forEach(item => {
    quantity = quantity + Number(item.quantity);
  });

  return (
    <Fragment>
      <button className='button' onClick={props.onClick}>
        <i className="fas fa-cart-shopping" style={{ color: "#ffffff" }} />
        <span>Your Cart</span>
        {/* <span>{cartCtx.message}</span> */}
        <span className="cart-badge">{quantity}</span>
      </button>
    </Fragment>
  )
}

export default HeaderCartButton