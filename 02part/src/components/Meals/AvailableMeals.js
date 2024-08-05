import React from 'react';
import './AvailableMeals.css';

const DUMMY_Meals = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest Fish veggies',
        price: 22.07,
    },
    {
        id: 'm2',
        name: 'Biryani',
        description: 'Finest fried rice with veggies',
        price: 30,
    }
]

const AvailableMeals = () => {
  const MealsList = DUMMY_Meals.map(meal => <li>{meal.name}</li>);

  return (
    <section className='meals'>
        <ul>
            {MealsList}
        </ul>
    </section>
  )
}

export default AvailableMeals