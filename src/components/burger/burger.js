import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger.css';
import BurgerIngredient from './burger_ingredient/burger_ingredient';

const burger = props => {
  const ingredients = Object.keys(props.ingredients)
    .map(key => {
      return [...Array(props.ingredients[key])].map((_, i) => {
        return <BurgerIngredient key={key + i} type={key} />;
      });
    });

  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.Array
};

export default burger;
