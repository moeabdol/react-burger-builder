import React from 'react';
import PropTypes from 'prop-types';
import styles from './build_control.css';

const buildControl = props => (
  <div className={styles.buildControl}>
    <div className={styles.label}>{props.label}</div>
    <button className={styles.less}>Less</button>
    <button className={styles.more}>More</button>
  </div>
);

buildControl.propTypes = {
  label: PropTypes.string
};

export default buildControl;
