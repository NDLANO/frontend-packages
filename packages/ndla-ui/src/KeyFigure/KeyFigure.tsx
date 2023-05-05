/*
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { IImageMetaInformationV3 } from '@ndla/types-backend/build/image-api';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${spacing.small};
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 150px;
`;

const TitleWrapper = styled.div`
  color: ${colors.text.primary};
  font-family: ${fonts.sans};
  font-weight: ${fonts.weight.bold};
  overflow-wrap: break-word;
  ${fonts.sizes('38px', '48px')};
  ${mq.range({ until: breakpoints.tabletWide })} {
    ${fonts.sizes('30px', '36px')};
  }
  max-width: 240px;
`;

const SubTitleWrapper = styled.div`
  overflow-wrap: 'break-word';
  ${mq.range({ until: breakpoints.tabletWide })} {
    padding-top: ${spacing.xxsmall};
    ${fonts.sizes('18px', '29px')};
    color: ${colors.text.primary};
    font-weight: ${fonts.weight.normal};
    font-family: ${fonts.sans};
  }
  max-width: 240px;
`;

interface Props {
  image?: {
    src?: string;
    alt?: string;
  };
  title: string;
  subTitle: string;
}

const KeyFigure = ({ image, title, subTitle }: Props) => {
  return (
    <ContentWrapper>
      <StyledImage src={image?.src} alt={image?.alt} />
      <TitleWrapper>{title}</TitleWrapper>
      <SubTitleWrapper>{subTitle}</SubTitleWrapper>
    </ContentWrapper>
  );
};

export default KeyFigure;
