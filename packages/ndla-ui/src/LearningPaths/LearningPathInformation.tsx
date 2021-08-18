/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { fonts, spacing, spacingUnit, breakpoints, mq } from '@ndla/core';

type StyledWrapperProps = {
  invertedStyle?: boolean;
};

const StyledWrapper = styled.div<StyledWrapperProps>`
  background: transparent;
  font-family: ${fonts.serif};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.serif};
  }
  max-width: 720px;
  margin: ${spacingUnit * 0.75}px ${spacing.normal} ${spacing.xsmall} 0 !important;
  ${mq.range({ from: breakpoints.desktop })} {
    margin: ${spacingUnit * 0.75}px ${spacing.normal} ${spacing.xsmall} 0 !important;
    padding: ${spacing.normal} ${spacing.large} ${spacing.large} ${spacingUnit * 4}px;
    ul {
      margin-left: ${spacing.normal};
    }
  }
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
    margin: 0;
    padding: ${spacing.small} ${spacing.normal};
    ul {
      padding: 0 ${spacingUnit * 0.75}px;
    }
  }
  ${mq.range({ from: breakpoints.tablet })} {
    ${(props) =>
      props.invertedStyle &&
      `
      color: #fff;
    `}
  }
`;

interface Props {
  description?: string;
  title: string;
  invertedStyle?: boolean;
  license?: {
    license: string;
    description: string;
    url: string;
  };
}

export const LearningPathInformation: React.FunctionComponent<Props> = ({
  description,
  title,
  license,
  invertedStyle,
}) => (
  <section className="o-wrapper">
    <StyledWrapper invertedStyle={invertedStyle} className="c-article">
      <div>
        <h1>{title}</h1>
        {license && license.license}
      </div>
      {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
    </StyledWrapper>
  </section>
);
