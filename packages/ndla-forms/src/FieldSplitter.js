/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { spacing } from '@ndla/core';

const FieldSplitterCSS = css`
  display: flex;
  &:only-child {
    > * {
      flex-basis: 1;
    }
  }
`;

const FieldSplitter = ({ children }) => (
  <div css={FieldSplitterCSS}>
    {Children.map(children, (child, i) =>
      cloneElement(child, {
        css: {
          flexGrow: 1,
          flexBasis: 0,
          marginLeft: i !== 0 ? spacing.small : 0,
        },
      }),
    )}
  </div>
);

FieldSplitter.propTypes = {
  children: PropTypes.node,
};

export default FieldSplitter;
