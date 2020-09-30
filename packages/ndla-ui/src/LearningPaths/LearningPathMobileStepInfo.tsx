/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { mq, breakpoints, typography } from '@ndla/core';
import { injectT } from '@ndla/i18n';
import { WithInjectedTProps } from '@ndla/i18n/lib/injectT';

const StyledInfo = styled.div`
  ${typography.smallHeading}
  ${mq.range({ from: breakpoints.tablet })} {
    display: none;
  }
`;

type Props = {
  total: number;
  current: number;
};

const LearningPathMobileStepInfo: React.FunctionComponent<
  WithInjectedTProps<Props>
> = ({ total, current, t }) => (
  <StyledInfo>
    {t('learningPath.mobileStepInfo', {
      totalPages: total,
      currentPage: current,
    })}
  </StyledInfo>
);

export default injectT(LearningPathMobileStepInfo);
