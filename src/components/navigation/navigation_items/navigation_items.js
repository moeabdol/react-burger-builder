import React from 'react';
import styles from './navigation_items.css';
import NavigationItem from './navigation_item/navigation_item';

const navigationItems = () => (
  <ul className={styles.navigationitems}>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
