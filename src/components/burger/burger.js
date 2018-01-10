import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger.css';
import BurgerIngredient from './burger_ingredient/burger_ingredient';

const burger = props => {
  let ingredients = Object.keys(props.ingredients)
    .map(key => {
      return [...Array(props.ingredients[key])].map((_, i) => {
        return <BurgerIngredient key={key + i} type={key} />;
      });
    })
    .reduce((arr, el) => arr.concat(el), []);

  if (ingredients.length === 0) {
    ingredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.object
};

export default burger;
