/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { ArrowCollapse } from '@ndla/icons/common';
import { ExpandTwoArrows } from '@ndla/icons/action';

export function FigureExpandButton({ messages, typeClass }: Props) {
  return (
    <button
      className="c-figure__fullscreen-btn"
      type="button"
      data-aria={messages.zoomImageButtonLabel}
      data-ariaexpanded={messages.zoomOutImageButtonLabel}
      aria-label={messages.zoomImageButtonLabel}
      data-figure-button
      data-classtype={typeClass}
    >
      <ExpandTwoArrows className="contracted-icon" />
      <ArrowCollapse className="expanded-icon" />
    </button>
  );
}

interface Props {
  messages: {
    zoomImageButtonLabel: string;
    zoomOutImageButtonLabel: string;
  };
  typeClass: string;
}
