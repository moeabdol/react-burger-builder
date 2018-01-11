import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.css';

const button = props => (
  <button
    className={[styles.button, styles[props.btnType]].join(' ')}
    onClick={props.clicked}>
    {props.children}
  </button>
);

button.propTypes = {
  children: PropTypes.node,
  clicked: PropTypes.func,
  btnType: PropTypes.string
};

export default button;
