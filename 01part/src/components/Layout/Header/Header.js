// import React from 'react';
// import './Header.module.css';

// const Header = ({ foodImageSrc }) => {
//   return (
//     <header className="header">
//       <h1>ReactMeals</h1>
//       <img src={foodImageSrc} alt="Food Image" className="food-image" /> 
//       <div className="cart">
//         {/* Cart icon and count */}
//       </div>
//     </header>
//   );
// };

// export default Header

// // Header.js




// import React from 'react';
// import './Header.module.css'

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>ReactMeals</h1>
//       <button className="cart-button">
//         <span className="cart-icon">🛒</span>
//         <span className="cart-count">0</span>
//         Your Cart
//       </button>
//     </header>
//   );
// };

// export default Header;





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
