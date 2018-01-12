import React from 'react';
import styles from './navigation_item.css';
import PropTypes from 'prop-types';

const navigationItem = props => (
  <li className={styles.navigationItem}>
    <a
      href={props.link}
      className={props.active ? styles.active : null}>
      {props.children}
    </a>
  </li>
);

navigationItem.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  active: PropTypes.bool
};

export default navigationItem;
