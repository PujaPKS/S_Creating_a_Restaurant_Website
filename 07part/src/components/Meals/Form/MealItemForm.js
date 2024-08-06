import React, { useContext } from 'react';
import './MealItemForm.css';
import Input from '../../UI/Input/Input';
import CartContext from '../../../store/CartContext';

const MealItemForm = (props) => {

  const cartCtx = useContext(CartContext); 
  console.log('reinitialized cartCtx', cartCtx);
  const addItemToCart = (e) => {
    e.preventDefault();
    //update cart context items
    // cartCtx.items.push(props.item);
    const quantity = document.getElementById('amount',+props.id).value
    cartCtx.addItem({...props.item, quantity: quantity});
    console.log('after addItemToCart', cartCtx);
  }
  return (
    <form className='form'>
        {console.log('inside render', cartCtx.items)}
        <Input label='Amount' input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        
        <button onClick={addItemToCart}>+ Add</button>
    </form>
  )
}

export default MealItemForm