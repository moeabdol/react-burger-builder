import React, { Component } from 'react';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/build_controls/build_controls';

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
