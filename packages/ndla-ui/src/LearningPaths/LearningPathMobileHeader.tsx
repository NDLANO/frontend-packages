/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { colors, fonts, spacing } from "@ndla/core";
import { LearningPathBadge } from "../ContentTypeBadge";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -${spacing.normal} ${spacing.medium};
  background: ${colors.brand.lighter};
  padding: ${spacing.small} ${spacing.normal};
`;

const StyledMiniHeader = styled.span`
  padding-left: ${spacing.xsmall};
  ${fonts.sizes(16, 1.1)};
`;

const LearningPathMobileHeader = () => {
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <LearningPathBadge size="xx-small" background />
      <StyledMiniHeader>{t("learningPath.youAreInALearningPath")}</StyledMiniHeader>
    </StyledWrapper>
  );
};

export default LearningPathMobileHeader;
