/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, fonts, misc, spacing } from '@ndla/core';
import { useId } from '@reach/auto-id';
import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';
import React, { ReactNode } from 'react';

const StyledTooltip = styled(Tooltip)`
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
}

const CustomTooltip = ({ id, children, tooltip }: Props) => {
  const deterministicId = useId(id);
  return (
    <StyledTooltip id={deterministicId} label={tooltip} aria-label={tooltip}>
      <span>{children}</span>
    </StyledTooltip>
  );
};
export default CustomTooltip;
