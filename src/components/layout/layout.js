import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.css';
import Toolbar from '../navigation/toolbar/toolbar';

const layout = props => (
  <React.Fragment>
    <Toolbar />
    <main className={styles.content}>
      {props.children}
    </main>
  </React.Fragment>
);

layout.propTypes = {
  children: PropTypes.node
};

export default layout;
