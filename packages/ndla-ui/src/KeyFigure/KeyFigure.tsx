/*
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${spacing.small};
  align-items: center;
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding: ${spacing.medium} ${spacing.large};
  }
`;

const StyledImage = styled.img`
  height: 150px;
  width: 150px;
`;

const TitleWrapper = styled.div`
  color: ${colors.text.primary};
  font-family: ${fonts.sans};
  font-weight: ${fonts.weight.bold};
  overflow-wrap: break-word;
  ${fonts.sizes('38px', '48px')};
  text-align: center;

  ${mq.range({ until: breakpoints.tabletWide })} {
    ${fonts.sizes('30px', '36px')};
  }
`;

const SubTitleWrapper = styled.div`
  overflow-wrap: 'break-word';
  text-align: center;
  ${fonts.sizes('18px', '29px')};
  color: ${colors.text.primary};
  font-weight: ${fonts.weight.normal};
  font-family: ${fonts.sans};

  ${mq.range({ until: breakpoints.tabletWide })} {
    padding-top: ${spacing.xxsmall};
  }
`;

interface Props {
  image?: {
    src?: string;
    alt?: string;
  };
  title: string;
  subtitle: string;
}

const KeyFigure = ({ image, title, subtitle }: Props) => {
  return (
    <ContentWrapper>
      <StyledImage src={image?.src} width={150} height={150} alt={image?.alt} />
      <TitleWrapper>{title}</TitleWrapper>
      <SubTitleWrapper>{subtitle}</SubTitleWrapper>
    </ContentWrapper>
  );
};

export default KeyFigure;
