import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper({
  prefix: 'c-',
  name: 'aside',
});

const Aside = ({ children, narrowScreen, wideScreen }) => {
  const modifiers = {
    narrowScreen,
    wideScreen,
  };

  return (
    <aside {...classes('', modifiers)}>
      <div {...classes('content')}>{children}</div>
    </aside>
  );
};

Aside.propTypes = {
  children: PropTypes.node.isRequired,
  narrowScreen: PropTypes.bool,
  wideScreen: PropTypes.bool,
};

Aside.defaultProps = {
  narrowScreen: null,
  wideScreen: null,
};

export default Aside;
