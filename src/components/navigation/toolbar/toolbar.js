import React from 'react';
import styles from './toolbar.css';
import Logo from '../../logo/logo';
import NavigationItems from '../navigation_items/navigation_items';

const toolbar = () => (
  <header className={styles.toolbar}>
    <div>Menu</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
