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
import Button from '@ndla/button';
import { Cross } from '@ndla/icons/action';

const classes = new BEMHelper({
  name: 'video-preview',
  prefix: 'c-',
});

export default function PreviewVideo({ onVideoPreview, children }) {
  return (
    <div {...classes()}>
      <Button {...classes('close')} stripped onClick={() => onVideoPreview(undefined)}>
        <Cross />
      </Button>
      {children}
    </div>
  );
}

PreviewVideo.propTypes = {
  children: PropTypes.node,
  onVideoPreview: PropTypes.func.isRequired,
};
