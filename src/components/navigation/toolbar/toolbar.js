import React from 'react';
import styles from './toolbar.css';
import Logo from '../../logo/logo';

const toolbar = () => (
  <header className={styles.toolbar}>
    <div>Menu</div>
    <Logo />
    <nav>
      ...
    </nav>
  </header>
);

export default toolbar;
