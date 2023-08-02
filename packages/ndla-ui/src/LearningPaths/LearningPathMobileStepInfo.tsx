/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { mq, breakpoints, typography } from '@ndla/core';
import { useTranslation } from 'react-i18next';

const StyledInfo = styled.div`
  ${typography.smallHeading}
  white-space: nowrap;
  ${mq.range({ from: breakpoints.tablet })} {
    display: none;
  }
`;

type Props = {
  total: number;
  current: number;
};

const LearningPathMobileStepInfo = ({ total, current }: Props) => {
  const { t } = useTranslation();
  return (
    <StyledInfo>
      {t('learningPath.mobileStepInfo', {
        totalPages: total,
        currentPage: current,
      })}
    </StyledInfo>
  );
};

export default LearningPathMobileStepInfo;
