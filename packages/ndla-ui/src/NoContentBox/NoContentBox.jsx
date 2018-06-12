/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Button } from 'ndla-ui';

const classes = new BEMHelper({
  name: 'topic-resource',
  prefix: 'c-',
});

export const NoContentBox = ({ buttonText, text, onClick }) => (
  <div {...classes('additional-resources-trigger')}>
    <span>
      <div>
        <p>{text}</p>
        {onClick && (
          <Button outline onClick={onClick}>
            {buttonText}
          </Button>
        )}
      </div>
    </span>
  </div>
);

NoContentBox.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
  text: PropTypes.string.isRequired,
};

NoContentBox.defaultProps = {
  onClick: null,
  buttonText: undefined,
};

export default NoContentBox;
