/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { colors, fonts, breakpoints, mq } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import styled from '@emotion/styled';
import { Image } from '..';

const BannerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
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
  flex: 0 0 40%;
  ${mq.range({ until: breakpoints.tabletWide })} {
    display: block;
    text-align: center;
    width: 100%;
  }
`;

const StyledImage = styled(Image)`
  ${mq.range({ until: breakpoints.tabletWide })} {
    max-height: 150px;
  }
`;

const TextWrapper = styled.div`
  ${mq.range({ until: breakpoints.tabletWide })} {
    margin-left: 0;
    margin-top: 10px;
  }
`;

const ContentText = styled.p`
  font-size: ${fonts.sizes(16)};
  color: ${colors.brand.primary};
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const LinkText = styled(SafeLink)`
  font-size: ${fonts.sizes(16)};
  color: ${colors.brand.primary};
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
  title: { title: string; lang?: string };
  content: { content: string; lang?: string };
  linkText: { text: string; lang?: string };
};
export const BannerCard = ({ link, title, content, linkText, image, ...rest }: BannerProps) => {
  return (
    <BannerWrapper {...rest}>
      <ImageWrapper>
        <StyledImage alt={image.altText} src={image.imageSrc} />
      </ImageWrapper>
      <TextWrapper>
        <TitleText lang={title.lang}>{title.title}</TitleText>
        <ContentText lang={content.lang}>{content.content}</ContentText>
        <LinkText target="_self" to={link} lang={linkText.lang}>
          {linkText.text}
        </LinkText>
      </TextWrapper>
    </BannerWrapper>
  );
};

export default BannerCard;
