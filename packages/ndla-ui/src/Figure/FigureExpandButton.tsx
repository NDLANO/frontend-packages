/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Play, ArrowCollapse } from '@ndla/icons/common';
import { ExpandTwoArrows } from '@ndla/icons/action';
import { CursorClick } from '@ndla/icons/action';

export function FigureExpandButton({ messages, typeClass, type }: Props) {
  return (
    <button
      className="c-figure__fullscreen-btn"
      type="button"
      data-aria={messages.zoomImageButtonLabel}
      data-ariaexpanded={messages.zoomOutImageButtonLabel}
      aria-label={messages.zoomImageButtonLabel}
      data-figure-button
      data-classtype={typeClass}>
      {!type && (
        <>
          <ExpandTwoArrows className="contracted-icon" />
          <ArrowCollapse className="expanded-icon" />
        </>
      )}
      {type === 'image' && (
        <>
          <ExpandTwoArrows className="contracted-icon" />
          <ArrowCollapse className="expanded-icon" />
        </>
      )}
      {type === 'h5p' && <CursorClick style={{ width: '24px', height: '24px' }} />}
      {type === 'iframe' && <CursorClick style={{ width: '24px', height: '24px' }} />}
      {type === 'external' && <CursorClick style={{ width: '24px', height: '24px' }} />}
      {type === 'video' && <Play style={{ width: '24px', height: '24px' }} />}
    </button>
  );
}

interface Props {
  type?: 'image' | 'video' | 'h5p' | 'iframe' | 'external';
  messages: {
    zoomImageButtonLabel: string;
    zoomOutImageButtonLabel: string;
  };
  typeClass: string;
}
