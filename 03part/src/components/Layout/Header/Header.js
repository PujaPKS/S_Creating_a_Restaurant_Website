import React, { Fragment } from 'react';
import './Header.css';
import mealsImage from '../../../assets/meals.jpg';
import HeaderCartButton from '../CartButton/HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
      </header>
        <div className='main-image'>
          <img src={mealsImage} alt="Food Image" />
        </div>
    </Fragment>
  );
};

export default Header;
