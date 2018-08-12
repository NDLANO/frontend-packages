import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Cross } from 'ndla-icons/action';
import { CSSTransition } from 'react-transition-group';

import Fade from '../Animation/Fade';

const classes = BEMHelper({
  prefix: 'c-',
  name: 'search-overlay',
});

const SearchOverlay = ({ close, isOpen, children }) => (
  <Fragment>
    <Fade in={isOpen}>
      <div className="o-backdrop" />
    </Fade>
    <CSSTransition
      timeout={300}
      classNames={classes().className}
      unmountOnExit
      in={isOpen}>
      <div {...classes()}>
        <div {...classes('container o-wrapper')}>{children}</div>
        <button {...classes('close-button')} onClick={close}>
          <Cross />
        </button>
      </div>
    </CSSTransition>
  </Fragment>
);

SearchOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default SearchOverlay;
