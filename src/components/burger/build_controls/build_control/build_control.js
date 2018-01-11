import React from 'react';
import PropTypes from 'prop-types';
import styles from './build_control.css';

const buildControl = props => (
  <div className={styles.buildControl}>
    <div className={styles.label}>{props.label}</div>
    <button
      className={styles.less}
      onClick={props.removed}
      disabled={props.disabled}>
      Less</button>
    <button
      className={styles.more}
      onClick={props.added}>
      More</button>
  </div>
);

buildControl.propTypes = {
  label: PropTypes.string,
  added: PropTypes.func,
  removed: PropTypes.func,
  disabled: PropTypes.boolean
};

export default buildControl;
