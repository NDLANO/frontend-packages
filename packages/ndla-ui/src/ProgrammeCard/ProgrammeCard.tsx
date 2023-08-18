/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import SafeLink from '@ndla/safelink';
import { spacing, colors, misc, breakpoints, mq, fonts } from '@ndla/core';

interface Image {
  src: string;
  alt: string;
}
export interface Programme {
  id: string;
  title: {
    title: string;
    language: string;
  };
  narrowImage?: Image;
  wideImage?: Image;
  url: string;
}

const StyledCardContainer = styled(SafeLink)`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background.default};
  border-radius: ${misc.borderRadius};
  box-shadow: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline ${colors.text.primary};
    text-underline-offset: 3px;
  }

  ${mq.range({ from: breakpoints.tablet })} {
    min-height: 350px;
    min-width: 250px;
    max-height: 350px;
    width: 250px;
  }
`;

const StyledImg = styled.img`
  display: none;
  flex: 1;
  border-radius: ${misc.borderRadius} ${misc.borderRadius} 0 0;
  width: 100%;

  &[data-is-mobile='true'] {
    ${mq.range({ until: breakpoints.tablet })} {
      display: block;
    }
  }
  &[data-is-mobile='false'] {
    ${mq.range({ from: breakpoints.tablet })} {
      display: block;
    }
  }
`;

const StyledTitle = styled.span`
  display: flex;
  min-height: 70px;
  align-items: center;
  padding-left: ${spacing.nsmall};
  margin-top: auto;

  border: 1px solid ${colors.brand.lighter};
  border-radius: 0 0 ${misc.borderRadius} ${misc.borderRadius};

  font-weight: ${fonts.weight.semibold};
  color: ${colors.text.primary};
  ${fonts.sizes('16px', '24px')};

  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('16px', '18px')};
  }
`;

const ProgrammeCard = ({ title, narrowImage, wideImage, url }: Programme) => {
  return (
    <StyledCardContainer to={url}>
      {narrowImage && <StyledImg data-is-mobile="false" src={narrowImage.src} loading="lazy" alt={narrowImage.alt} />}
      {wideImage && <StyledImg data-is-mobile="true" src={wideImage.src} loading="lazy" alt={wideImage.alt} />}
      <StyledTitle>{title.title}</StyledTitle>
    </StyledCardContainer>
  );
};

export default ProgrammeCard;
