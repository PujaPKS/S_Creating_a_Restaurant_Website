import React, { useContext, useRef, useState } from 'react';
import './MealItemForm.css';
import Input from '../../UI/Input/Input';
import CartContext from '../../../store/CartContext';

const MealItemForm = (props) => {

  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const cartCtx = useContext(CartContext); 

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber<1 || enteredAmountNumber>5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  }
  return (
    <form className='form' onSubmit={submitHandler}>
        {/* {console.log('inside render', cartCtx.items)} */}
        <Input 
          ref={amountInputRef}
          label='Amount' input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        
        <button >+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default MealItemForm