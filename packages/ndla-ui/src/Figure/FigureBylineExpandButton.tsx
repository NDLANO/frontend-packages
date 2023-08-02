/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ChevronUp, ChevronDown } from '@ndla/icons/common';

interface Props {
  messages: {
    expandBylineButtonLabel: string;
    minimizeBylineButtonLabel: string;
  };
  typeClass: string;
}

export const FigureBylineExpandButton = ({ messages, typeClass }: Props) => {
  return (
    <button
      className="c-figure__show-byline-btn"
      type="button"
      data-figure-button
      data-classtype={typeClass}
      data-aria={messages.expandBylineButtonLabel}
      data-ariaexpanded={messages.minimizeBylineButtonLabel}
      aria-label={messages.expandBylineButtonLabel}
    >
      <ChevronUp className="expanded-icon" />
      <ChevronDown className="contracted-icon" />
    </button>
  );
};
