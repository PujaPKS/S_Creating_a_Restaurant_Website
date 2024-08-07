import React from 'react';
import './AvailableMeals.css';
import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_Meals = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest Fish veggies',
        price: 22.07,
    },
    {
        id: 'm2',
        name: 'Pizza Italiano',
        description: 'Fresh tomatoes, mozzarella, basil',
        price: 18.99,
    },
    
    {
        id: 'm3',
        name: 'Chicken Fajita',
        description: 'Sizzling chicken, bell peppers, onions',
        price: 15.49,
    },
    
    {
        id: 'm4',
        name: 'Veggie Burger',
        description: 'Juicy patty, avocado, lettuce, tomato',
        price: 12.99,
    },
]

const AvailableMeals = () => {
  const MealsList = DUMMY_Meals.map((meal => 
    <MealItem 
        key={meal.id} 
        id={meal.id}
        name={meal.name} 
        description={meal.description} 
        price={meal.price}
        //meal ={meal}
    />
  ));

  return (
    <section className='meals'>
        <Card>
            <ul>{MealsList}</ul>
        </Card>
    </section>
  )
}

export default AvailableMeals