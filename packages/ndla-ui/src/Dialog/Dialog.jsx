/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B These component is used to render static markup serverside
// Any interactivty is added by scripts located in the ndla-article-scripts package

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { createUniversalPortal } from '../utils/createUniversalPortal';

const classes = new BEMHelper({
  name: 'dialog',
  prefix: 'c-',
});

export const Dialog = ({
  children,
  messages,
  id,
  labelledby,
  label,
  modifier,
  disablePortal,
  hidden,
  onClose,
  ...rest
}) => {
  const content = (
    <div
      {...classes('', modifier)}
      data-dialog-id={id}
      role="dialog"
      aria-hidden={hidden}
      aria-labelledby={labelledby}
      aria-label={label}
      {...rest}>
      <div {...classes('content')}>
        <button
          {...classes('close')}
          onClick={() => {
            if (onClose) {
              onClose();
            }
          }}>
          {messages.close}
        </button>
        {children}
      </div>
      <div className="o-backdrop" />
    </div>
  );

  if (disablePortal) {
    return content;
  }

  return createUniversalPortal(content, 'body');
};

Dialog.propTypes = {
  id: PropTypes.string.isRequired,
  labelledby: PropTypes.string,
  label: PropTypes.string,
  hidden: PropTypes.bool,
  children: PropTypes.node,
  messages: PropTypes.shape({
    close: PropTypes.string.isRequired,
  }),
  modifier: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  disablePortal: PropTypes.bool,
  onClose: PropTypes.func,
};

Dialog.defaultProps = {
  disablePortal: false,
  labelledby: null,
  label: null,
  hidden: true,
  onClose: null,
  messages: {
    close: 'Lukk',
  },
};
