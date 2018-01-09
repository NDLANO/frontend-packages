import React from 'react';
import PropTypes from 'prop-types';

const Aside = ({ children }) => (
  <aside className="c-aside">
    <div className="c-aside__content">{children}</div>
  </aside>
);

Aside.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Aside;
