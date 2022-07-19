/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, fonts, misc, spacing } from '@ndla/core';
import { useId } from '@reach/auto-id';
import Tooltip from '@reach/tooltip';
import React, { ReactNode } from 'react';

const StyledTooltip = styled(Tooltip)`
  color: #fff;
  z-index: 99999;
  border: 0;
  background: ${colors.text.primary};
  border-radius: ${misc.borderRadius};
  padding: ${spacing.xsmall} ${spacing.small};
  font-family: ${fonts.sans};
  font-size: 14;
  line-height: 1.2;
  font-weight: ${fonts.weight.normal};
  text-align: center;
  white-space: normal;
  max-width: calc(100vw - #{${spacing.normal}});
`;

interface Props {
  id?: string;
  children?: ReactNode;
  dangerousHTML?: string;
  tooltip: string;
}

const CustomTooltip = ({ id, children, tooltip, dangerousHTML }: Props) => {
  const deterministicId = useId(id);

  // Article Converter needs hydration due to SSR removing all dynamics
  if (dangerousHTML) {
    return (
      <StyledTooltip id={deterministicId} label={tooltip} aria-label={tooltip}>
        <span data-tooltip-children dangerouslySetInnerHTML={{ __html: dangerousHTML }} />
      </StyledTooltip>
    );
  }

  return (
    <div data-tooltip data-tooltip-id={deterministicId} data-tooltip-label={tooltip}>
      <StyledTooltip id={deterministicId} label={tooltip} aria-label={tooltip}>
        <span data-tooltip-children>{children}</span>
      </StyledTooltip>
    </div>
  );
};

export default CustomTooltip;
