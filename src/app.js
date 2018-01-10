import React, { Component } from 'react';
import Layout from './components/layout/layout';
import BurgerBuilder from './containers/burger_builder/burger_builder';

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
