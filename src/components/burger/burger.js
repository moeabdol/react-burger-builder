import React from 'react';
import styles from './burger.css';
import BurgerIngredient from './burger_ingredient/burger_ingredient';

const burger = () => {
  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
