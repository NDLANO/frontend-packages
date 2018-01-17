import React from 'react';
import PropTypes from 'prop-types';
import { Search } from 'ndla-icons/common';
import BEMHelper from 'react-bem-helper';

import ClickToggle from '../common/ClickToggle';

const classes = BEMHelper({
  prefix: 'c-',
  name: 'toggle-search-button',
  outputIsString: true,
});

const ToggleSearchButton = ({ messages, children, expanded }) => {
  const buttonContent = (
    <span className={classes('button-content')}>
      <span className={classes('button-text')}>{messages.buttonText}</span>
      <Search />
    </span>
  );

  return (
    <ClickToggle
      title={buttonContent}
      className={classes()}
      buttonClassName={classes('button')}
      expanded={expanded}>
      {children}
    </ClickToggle>
  );
};

ToggleSearchButton.propTypes = {
  messages: PropTypes.shape({
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool,
};

export default ToggleSearchButton;
