import React, { Fragment } from 'react';
import './HeaderCartButton.css';

const HeaderCartButton = (props) => {
  return (
    <Fragment>
      <button className='button' onClick={props.onClick}>
        <i className="fas fa-cart-shopping" style={{ color: "#ffffff" }} />
        <span>Your Cart</span>
        <span className="cart-badge">0</span>
      </button>
    </Fragment>
  )
}

export default HeaderCartButton