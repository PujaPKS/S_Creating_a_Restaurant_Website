import React, { useContext } from 'react';
import './Cart.css';
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/CartContext';


const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const cartItems = <ul className='cart-items'>{
    cartCtx.items.map(item => 
        <li>Name: {item.name} 
            Price: {item.price} 
            Quantity: {item.quantity}
        </li>
    )}</ul>
    
  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className='total'>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className='actions'>
            <button className='button--alt' onClick={props.onClose}>Close</button>
            <button className='button'>Order</button>
        </div>
    </Modal>
  )
}

export default Cart