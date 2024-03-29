/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { spacing, colors, misc, breakpoints, mq, fonts } from "@ndla/core";
import { SafeLink } from "@ndla/safelink";

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
`;

const StyledImg = styled.img`
  display: block;
  flex: 1;
  border-radius: ${misc.borderRadius} ${misc.borderRadius} 0 0;
  width: 100%;
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
  ${fonts.sizes("16px", "24px")};

  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes("16px", "18px")};
  }
`;

const ProgrammeCard = ({ title, narrowImage, wideImage, url }: Programme) => {
  return (
    <StyledCardContainer to={url}>
      {narrowImage && <StyledImg height={280} width={250} src={narrowImage.src} alt={narrowImage.alt} />}
      {wideImage && <StyledImg height={330} width={120} src={wideImage.src} alt={wideImage.alt} />}
      <StyledTitle>{title.title}</StyledTitle>
    </StyledCardContainer>
  );
};

export default ProgrammeCard;
