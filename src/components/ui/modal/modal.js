import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal.css';

const modal = props => (
  <div className={styles.modal}>
    {props.children}
  </div>
);

modal.propTypes = {
  children: PropTypes.node
};

export default modal;
