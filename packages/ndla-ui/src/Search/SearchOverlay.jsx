import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Cross } from 'ndla-icons/action';

const classes = BEMHelper({
  prefix: 'c-',
  name: 'search-overlay',
});

const SearchOverlay = ({ close, children }) => (
  <Fragment>
    <div className="o-backdrop" />
    <div {...classes()}>
      <div {...classes('container o-wrapper')}>{children}</div>
      <button {...classes('close-button')} onClick={close}>
        <Cross />
      </button>
    </div>
  </Fragment>
);

SearchOverlay.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default SearchOverlay;
