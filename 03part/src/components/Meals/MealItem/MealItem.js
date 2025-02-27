import React from 'react';
import './MealItem.css';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
  return (
    <li className='meal'>
        <div>
            <h3>{props.name}</h3>
            <div className='description'>{props.description}</div>
            <div className='price'>{price}</div>
        </div>
        <div>

        </div>
    </li>
  )
}

export default MealItem