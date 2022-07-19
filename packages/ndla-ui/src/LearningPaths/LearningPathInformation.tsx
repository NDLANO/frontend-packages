/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { fonts, spacing, spacingUnit, breakpoints, mq, colors } from '@ndla/core';
import { getLicenseByAbbreviation, LicenseByline } from '@ndla/licenses';

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

const LicenseWrapper = styled.div`
  ul {
    margin-left: 0;
    margin-bottom: ${spacing.small};
  }
`;

const StyledHeader = styled.h1`
  margin-bottom: ${spacing.small};
`;

interface Props {
  description?: string;
  title: string;
  invertedStyle?: boolean;
  license?: {
    license: string;
  };
}

export const LearningPathInformation = ({ description, title, license, invertedStyle }: Props) => {
  const { rights } = getLicenseByAbbreviation(license?.license || '', 'nb');
  return (
    <section className="o-wrapper">
      <StyledWrapper invertedStyle={invertedStyle} className="c-article">
        <LicenseWrapper>
          <StyledHeader>{title}</StyledHeader>
          <LicenseByline licenseRights={rights} color={colors.brand.tertiary} />
        </LicenseWrapper>
        {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
      </StyledWrapper>
    </section>
  );
};
