import React from 'react';
import PropTypes from 'prop-types';

const layout = props => (
  <React.Fragment>
    <div>Navbar, Sidebar, Backdrop</div>
    <main>
      {props.children}
    </main>
  </React.Fragment>
);

layout.propTypes = {
  children: PropTypes.node
};

export default layout;
