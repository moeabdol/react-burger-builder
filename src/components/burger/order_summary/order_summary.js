import React from 'react';
import PropTypes from 'prop-types';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(key => {
      return (
        <li key={key}>
          <span style={{textTransform: 'capitalize'}}>
            {key}
          </span>: {props.ingredients[key]}
        </li>
      );
    });

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delecious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </React.Fragment>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.object
};

export default orderSummary;
