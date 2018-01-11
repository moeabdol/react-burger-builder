import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../ui/button/button';

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
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button
        btnType="danger"
        clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button
        btnType="success"
        clicked={props.purchaseContinued}>CONTINUE</Button>
    </React.Fragment>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.object,
  purchaseCancelled: PropTypes.func,
  purchaseContinued: PropTypes.func,
  price: PropTypes.number
};

export default orderSummary;
