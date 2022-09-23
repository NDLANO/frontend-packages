/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { colors, fonts, spacing } from '@ndla/core';
import { MenuButton, MenuItemProps } from '@ndla/button';
import ContentTypeBadge from '../ContentTypeBadge';
import Image from '../Image';
import {
  CompressedTagList,
  ResourceImageProps,
  ResourceTitle,
  Row,
  TopicList,
  ResourceTitleLink,
  LoaderProps,
  StyledContentIconWrapper,
} from './resourceComponents';
import ContentLoader from '../ContentLoader';

interface BlockResourceProps {
  id: string;
  link: string;
  tagLinkPrefix?: string;
  title: string;
  resourceImage: ResourceImageProps;
  topics: string[];
  tags?: string[];
  description?: string;
  menuItems?: MenuItemProps[];
  isLoading?: boolean;
  targetBlank?: boolean;
  contentType: string;
}

const BlockElementWrapper = styled.div`
  display: flex;
  text-decoration: none;
  box-shadow: none;
  flex-direction: column;
  max-width: 300px;
  max-height: 240px;
  border: 1px solid ${colors.brand.light};
  border-radius: 2px;
  color: ${colors.brand.greyDark};
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 6px 2px rgba(9, 55, 101, 0.08);
    transition-duration: 0.2s;
    ${() => ResourceTitleLink} {
      color: ${colors.brand.primary};
      text-decoration: underline;
    }
  }
`;

const BlockDescription = styled.p`
  display: -webkit-box;
  line-clamp: 2;
  ${fonts.sizes(16)};
  height: 0em;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: height 0.2s ease-out;
  ${() => BlockElementWrapper}:hover &, ${() => BlockElementWrapper}:focus & ,  ${() =>
    BlockElementWrapper}:focus-within & {
    // Unfortunate css needed for multi-line text overflow ellipsis.
    height: 3.1em;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const RightRow = styled(Row)`
  justify-content: flex-end;
  margin-bottom: -${spacing.xxsmall};
`;

const BlockInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing.small};
  gap: ${spacing.xxsmall};
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  aspect-ratio: 3/4;
  img {
    min-width: 100%;
  }
`;
interface BlockImageProps {
  image: ResourceImageProps;
  loading?: boolean;
  contentType: string;
}

const BlockImage = ({ image, loading, contentType }: BlockImageProps) => {
  if (loading) {
    return (
      <ContentLoader height={'100%'} width={'100%'} viewBox={null} preserveAspectRatio="none">
        <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
      </ContentLoader>
    );
  }
  if (image.src === '') {
    return (
      <StyledContentIconWrapper contentType={contentType}>
        <ContentTypeBadge type={contentType} size="large" />
      </StyledContentIconWrapper>
    );
  } else {
    return <Image alt={image.alt} src={image.src} fallbackWidth={300} />;
  }
};

const TopicAndTitleLoader = ({ children, loading }: LoaderProps) => {
  if (loading) {
    return (
      <ContentLoader height={'18px'} width={'100%'} viewBox={null} preserveAspectRatio="none">
        <rect x="0" y="0" rx="3" ry="3" width="20%" height="18px" />
        <rect x="25%" y="0" rx="3" ry="3" width="20%" height="18px" />
      </ContentLoader>
    );
  }

  return <>{children}</>;
};

const BlockResource = ({
  id,
  link,
  tagLinkPrefix,
  title,
  tags,
  resourceImage,
  topics,
  description,
  menuItems,
  isLoading,
  targetBlank,
  contentType,
}: BlockResourceProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleClick = () => {
    if (linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <BlockElementWrapper onClick={handleClick} id={id}>
      <ImageWrapper>
        <BlockImage image={resourceImage} loading={isLoading} contentType={contentType} />
      </ImageWrapper>
      <BlockInfoWrapper>
        <TopicAndTitleLoader loading={isLoading}>
          <ResourceTitleLink title={title} target={targetBlank ? '_blank' : undefined} to={link} ref={linkRef}>
            <ResourceTitle>{title}</ResourceTitle>
          </ResourceTitleLink>
        </TopicAndTitleLoader>
        <TopicList topics={topics} />
        <BlockDescription>{description}</BlockDescription>
        <RightRow>
          {tags && <CompressedTagList tagLinkPrefix={tagLinkPrefix} tags={tags} />}
          {menuItems && menuItems.length > 0 && <MenuButton alignRight size="small" menuItems={menuItems} />}
        </RightRow>
      </BlockInfoWrapper>
    </BlockElementWrapper>
  );
};

export default BlockResource;
