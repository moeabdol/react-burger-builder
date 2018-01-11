import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './logo.css';

const logo = () => (
  <div className={styles.logo}>
    <img src={burgerLogo} alt="MyBurger Logo" />
  </div>
);

export default logo;
