/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import decorateComponentWithProps from 'decorate-component-with-props';
import BEMHelper from 'react-bem-helper';
import { uuid } from 'ndla-util';

const classes = new BEMHelper({
  name: 'toolbar',
  prefix: 'c-',
});

const Toolbar = ({ store, structure }) =>
  <ul {...classes()}>
    {structure.map(Button =>
      <li key={uuid()} {...classes('item')}>
        <Button
          theme={{
            button: classes('button').className,
            active: classes('button', 'active').className,
          }}
          getEditorState={store.getEditorState}
          setEditorState={store.setEditorState}
        />
      </li>,
    )}
  </ul>;

Toolbar.propTypes = {
  store: PropTypes.shape({
    setEditorState: PropTypes.func.isRequired,
    getEditorState: PropTypes.func.isRequired,
  }),
  structure: PropTypes.array.isRequired,
};

export default (config = {}) => {
  const store = {};

  const { structure = [] } = config;

  const toolbarProps = {
    store,
    structure,
  };

  return {
    initialize: ({ setEditorState, getEditorState }) => {
      store.setEditorState = setEditorState;
      store.getEditorState = getEditorState;
    },
    Toolbar: decorateComponentWithProps(Toolbar, toolbarProps),
  };
};
