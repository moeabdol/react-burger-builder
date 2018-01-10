import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.css';

const layout = props => (
  <React.Fragment>
    <div>Navbar, Sidebar, Backdrop</div>
    <main className={styles.content}>
      {props.children}
    </main>
  </React.Fragment>
);

layout.propTypes = {
  children: PropTypes.node
};

export default layout;
