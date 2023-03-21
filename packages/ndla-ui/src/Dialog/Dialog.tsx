/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B These component is used to render static markup serverside
// Any interactivty is added by scripts located in the ndla-article-scripts package

import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';
import { createUniversalPortal } from '../utils/createUniversalPortal';

const classes = new BEMHelper({
  name: 'dialog',
  prefix: 'c-',
});

interface Props {
  id: string;
  labelledby?: string;
  label?: string;
  hidden?: boolean;
  children?: ReactNode;
  messages?: {
    close: string;
  };
  modifier?: string | string[];
  disablePortal?: boolean;
  onClose?: () => void;
}

export const Dialog = ({
  children,
  messages = { close: 'Lukk' },
  id,
  labelledby,
  label,
  modifier,
  disablePortal = false,
  hidden = true,
  onClose,
  ...rest
}: Props) => {
  const content = (
    <div
      {...classes('', modifier)}
      data-dialog-id={id}
      role="dialog"
      aria-hidden={hidden}
      aria-labelledby={labelledby}
      aria-label={label}
      {...rest}
    >
      <div {...classes('content')}>
        <button
          {...classes('close')}
          type="button"
          onClick={() => {
            if (onClose) {
              onClose();
            }
          }}
        >
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
