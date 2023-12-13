/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { fonts, spacing } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { OneColumn, LayoutItem } from '../index';

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.normal};
  padding-bottom: ${spacing.medium};
  h1 {
    margin-bottom: 0px;
  }
`;

const StyledSmallText = styled.small`
  ${fonts.sizes(20, 1.3)};
  font-weight: ${fonts.weight.semibold};
`;

const StyledLinkWrapper = styled.div`
  margin: ${spacing.xsmall} 0;
  a {
    margin-left: ${spacing.xsmall};
  }
`;

const OneColumnCss = css`
  background: #fff;
  padding-top: ${spacing.xxlarge};
  margin-top: -${spacing.normal};
`;

interface Props {
  children: ReactNode;
  subject?: {
    name: string;
    url: string;
  };
  topic?: {
    name: string;
    url: string;
  };
  learningPathName: string;
}

const LearningPathLastStepNavigation = ({ subject, topic, learningPathName, children }: Props) => {
  const { t } = useTranslation();
  return (
    <OneColumn css={OneColumnCss}>
      <LayoutItem layout="center">
        <TextWrapper>
          <h1>{t('learningPath.lastStep.heading')}</h1>
          <StyledSmallText>
            {t('learningPath.lastStep.headingSmall', {
              learningPathName,
            })}
          </StyledSmallText>
        </TextWrapper>
        {subject && (
          <StyledLinkWrapper>
            {t('learningPath.lastStep.subjectHeading')}
            <SafeLink to={subject.url}>{subject.name}</SafeLink>
          </StyledLinkWrapper>
        )}
        {topic && (
          <StyledLinkWrapper>
            {t('learningPath.lastStep.topicHeading')}
            <SafeLink to={topic.url}>{topic.name}</SafeLink>
          </StyledLinkWrapper>
        )}
        {children}
      </LayoutItem>
    </OneColumn>
  );
};

export default LearningPathLastStepNavigation;
