/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Time } from '@ndla/icons/common';
import { SafeLinkButton } from '@ndla/safelink';
import { useTranslation } from 'react-i18next';
import { colors, spacing, spacingUnit, fonts, mq, breakpoints, animations } from '@ndla/core';
import LearningPathMenuAsideCopyright from './LearningPathMenuAsideCopyright';

const infoTextCSS = css`
  ${fonts.sizes(18, 1.3)};
  font-weight: ${fonts.weight.semibold};
  width: calc(100% - ${spacing.medium});
  border-top: 2px solid ${colors.brand.greyLight};
  margin-top: ${spacing.normal};
  padding: ${spacing.normal} 0 0;
`;

const learningPathDetailsCSS = css`
  ${fonts.sizes(14, 1.1)};
  font-weight: ${fonts.weight.normal};
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-items: flex-start;
  margin-bottom: ${spacing.xsmall};
  p {
    margin: 0;
    padding-left: ${spacing.xsmall};
  }
  span {
    display: block;
  }
`;

type StyledAsideProps = {
  isOpen: boolean;
  invertedStyle?: boolean;
};

const StyledAside = styled.aside<StyledAsideProps>`
  display: none;
  padding-left: ${spacingUnit * 2.25}px;
  ${mq.range({ from: breakpoints.desktop })} {
    display: block;
  }
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    ${(props) =>
      props.isOpen &&
      css`
        display: block;
        opacity: 0;
        ${animations.fadeIn()}
        animation-fill-mode: forwards;
        animation-delay: 450ms;
      `}
  }
  ${mq.range({ until: breakpoints.tablet })} {
    display: block;
    padding-left: ${spacingUnit * 1.25}px;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    ${(props) =>
      props.invertedStyle &&
      `
      color: #fff;
    `}
  }
`;

type Props = {
  isOpen: boolean;
  lastUpdated: string;
  learningPathURL: string;
  invertedStyle?: boolean;
  copyright: {
    contributors: {
      type: string;
      name: string;
    }[];
    license: {
      license: string;
    };
  };
};

const LearningPathMenuAside = ({ lastUpdated, learningPathURL, copyright, isOpen, invertedStyle }: Props) => {
  const { t } = useTranslation();
  return (
    <StyledAside isOpen={isOpen} invertedStyle={invertedStyle}>
      <div css={learningPathDetailsCSS}>
        <Time />
        <p>
          {t('learningPath.lastUpdated')}: {lastUpdated}
        </p>
      </div>
      {copyright.contributors && <LearningPathMenuAsideCopyright copyright={copyright} />}
      <p css={infoTextCSS}>{t('learningPath.createLearningPathText')}</p>
      <SafeLinkButton
        to={learningPathURL}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        inverted={invertedStyle}
      >
        {t('learningPath.createLearningPathButtonText')}
      </SafeLinkButton>
    </StyledAside>
  );
};

export default LearningPathMenuAside;
