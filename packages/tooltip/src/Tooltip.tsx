/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from '@emotion/core';
import { colors, fonts, misc, spacing } from '@ndla/core';
import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';
import React from 'react';
import { ReactNode } from 'react';

const tooltipStyling = css`
  color: #fff;
  background: ${colors.text.primary};
  border-radius: ${misc.borderRadius} 0 0 ${misc.borderRadius};
  padding: ${spacing.xsmall} ${spacing.small};
  font-family: ${fonts.sans};
  font-size: 14;
  line-height: 1.2;
  font-weight: ${fonts.weight.normal};
  text-align: center;
  white-space: nowrap;
  max-width: calc(100vw - #{${spacing.normal}});
`;

interface Props {
  id?: string;
  children: ReactNode;
  tooltip: string;
  delay?: number; // No longer used
  disabled?: boolean; // No longer used
  align?: 'left' | 'right' | 'top' | 'bottom'; // No longer used
  className?: string; // No longer used
  tooltipContainerClass?: string; // No longer used
}

const CustomTooltip = ({ id, children, tooltip }: Props) => {
  return (
    <Tooltip id={id} label={tooltip} css={tooltipStyling} aria-label={tooltip}>
      <span>{children}</span>
    </Tooltip>
  );
};
export default CustomTooltip;
