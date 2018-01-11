import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal.css';

const modal = props => (
  <div
    className={styles.modal}
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
    }}>
    {props.children}
  </div>
);

modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool
};

export default modal;
