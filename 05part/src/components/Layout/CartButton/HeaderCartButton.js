import React, { Fragment } from 'react';
import './HeaderCartButton.css';

const HeaderCartButton = () => {
  return (
    <Fragment>
      <button className='button'>
        <i className="fas fa-cart-shopping" style={{ color: "#ffffff" }} />
        <span>Your Cart</span>
        <span className="cart-badge">0</span>
      </button>
    </Fragment>
  )
}

export default HeaderCartButton