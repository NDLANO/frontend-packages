/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, fonts, mq, spacing, spacingUnit, breakpoints } from '@ndla/core';
import OneColumn from '../Layout/OneColumn';

type Types = 'mobile' | 'tablet' | 'desktop' | 'wide';

interface Props {
  images: {
    url: string;
    types: Types[];
  }[];
  heading: string;
}

const StyledHeader = styled.header`
  width: 100%;
  position: relative;
  min-height: 180px;
  display: flex;
  justify-content: flex-start;
  background: ${colors.brand.primary};

  ${mq.range({ from: breakpoints.tablet })} {
    height: 320px;
    align-items: center;
  }
`;

const typeMap: Record<Types, { from?: string; until?: string }> = {
  mobile: { from: breakpoints.mobile, until: breakpoints.tablet },
  tablet: { from: breakpoints.tablet, until: breakpoints.desktop },
  desktop: { from: breakpoints.desktop, until: breakpoints.wide },
  wide: { from: breakpoints.wide },
};
interface StyledBackgroundProps {
  type: Types;
  imageUrl: string;
}

const StyledBackground = styled.div<StyledBackgroundProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;
  opacity: 0.5;
  background-image: url(${(p) => p.imageUrl});
  ${(p) =>
    p.type &&
    css`
      display: none;
      ${mq.range(typeMap[p.type])} {
        display: block;
      }
    `};
`;

const StyledHeading = styled.h1`
  ${fonts.sizes('24px', '28px')};
  color: ${colors.white};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  margin: ${spacing.medium} 0 ${spacing.normal} 0;
  font-weight: ${fonts.weight.bold};
  padding: 0 ${spacing.normal};

  ${mq.range({ from: breakpoints.tablet })} {
    margin: 0;
    ${fonts.sizes('40px', '40px')};
    padding: 0 0 0 ${spacingUnit * 3}px;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    margin: 0;
    ${fonts.sizes('52px', '52px')};
    padding: 0 0 0 ${spacingUnit * 3}px;
  }
`;

const SubjectHeader = ({ images = [], heading }: Props) => (
  <StyledHeader>
    {images?.map((image) =>
      image.types.map((type) => <StyledBackground key={`${image.url}${type}`} imageUrl={image.url} type={type} />),
    )}
    <OneColumn noPadding>
      <StyledHeading>{heading}</StyledHeading>
    </OneColumn>
  </StyledHeader>
);

export default SubjectHeader;
