/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import { colors, fonts, breakpoints, mq } from '@ndla/core';
import styled from '@emotion/styled';
import { Image } from '..';

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 669px;
  border-radius: 8px;
  border: 1px solid ${colors.brand.greyLight};
  font-family: ${fonts.sans};
  padding: 30px;
  gap: 30px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;

  flex: 0 0 40%;
  justify-content: center;
  ${mq.range({ until: breakpoints.tabletWide })} {
    display: block;
  }
`;
const ImageElement = styled(Image)`
  height: 20vh;
`;

const TextWrapper = styled.div`
  ${mq.range({ until: breakpoints.tabletWide })} {
    margin-left: 0;
    margin-top: 10px;
  }
`;

const ContentText = styled.p`
  font-size: ${fonts.sizes(16)};
  color: ${colors.brand.grey};
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const LinkText = styled.a`
  font-size: ${fonts.sizes(16)};
  color: ${colors.brand.grey};
`;
const TitleText = styled.h2`
  margin-top: 7px;
  font-size: ${fonts.sizes(22)};
  ${mq.range({ until: breakpoints.tabletWide })} {
    margin-top: 0;
  }
`;

type ImageProps = {
  altText: string;
  imageSrc: string;
};
type BannerProps = {
  link: string;
  image: ImageProps;
  title: string;
  content: string;
  linkText: string;
};
export const BannerCard = ({ link, title, content, linkText, image }: BannerProps) => {
  return (
    <BannerWrapper>
      <ImageWrapper>
        <ImageElement alt={image.altText} src={image.imageSrc} />
      </ImageWrapper>
      <TextWrapper>
        <TitleText>{title}</TitleText>
        <ContentText>{content}</ContentText>
        <LinkText href={link}>{linkText}</LinkText>
      </TextWrapper>
    </BannerWrapper>
  );
};

export default BannerCard;
