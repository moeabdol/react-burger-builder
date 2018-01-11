import React from 'react';
import PropTypes from 'prop-types';
import styles from './build_controls.css';
import BuildControl from './build_control/build_control';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => (
  <div className={styles.buildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]} />
      );
    })}
    <button
      className={styles.orderButton}
      disabled={!props.purchasable}>
      ORDER NOW</button>
  </div>
);

buildControls.propTypes = {
  ingredientAdded: PropTypes.func,
  disabled: PropTypes.object,
  price: PropTypes.number,
  purchasable: PropTypes.bool
};

export default buildControls;
