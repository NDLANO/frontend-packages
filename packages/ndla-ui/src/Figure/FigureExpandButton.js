/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import PropTypes from 'prop-types';
import { ArrowCollapse } from '@ndla/icons/common';
import { ExpandTwoArrows } from '@ndla/icons/action';

export function FigureExpandButton({ children, messages, typeClass }) {
  return (
    <button
      className="c-figure__fullscreen-btn"
      type="button"
      data-figure-button
      data-classtype={typeClass}
      data-aria={messages.zoomImageButtonLabel}
      data-ariaexpanded={messages.zoomOutImageButtonLabel}
      aria-label={messages.zoomImageButtonLabel}>
      <ArrowCollapse className="expanded-icon" />
      <ExpandTwoArrows className="contracted-icon" />
    </button>
  );
}

FigureExpandButton.propTypes = {
  messages: PropTypes.shape({
    zoomImageButtonLabel: PropTypes.string.isRequired,
    zoomOutImageButtonLabel: PropTypes.string.isRequired,
  }),
  typeClass: PropTypes.string.isRequired,
};
