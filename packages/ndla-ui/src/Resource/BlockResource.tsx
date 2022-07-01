/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React from 'react';
import SafeLink from '@ndla/safelink';
import { colors, fonts, spacing } from '@ndla/core';
import { MenuButton, MenuItemProps } from '@ndla/button';
import Image from '../Image';
import { CompressedTagList, ResourceImageProps, ResourceTitle, Row, TopicList } from './resourceComponents';

interface BlockResourceProps {
  link: string;
  title: string;
  resourceImage: ResourceImageProps;
  topics: string[];
  tags?: string[];
  description?: string;
  menuItems?: MenuItemProps[];
}

const BlockElementWrapper = styled(SafeLink)`
  display: flex;
  text-decoration: none;
  box-shadow: none;
  flex-direction: column;
  max-width: 300px;
  max-height: 240px;
  border: 1px solid ${colors.brand.light};
  border-radius: 2px;
  color: ${colors.brand.greyDark};
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
  ${() => BlockElementWrapper}:hover & {
    // Unfortunate css needed for multi-line text overflow ellipsis.
    height: 3.1em;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const RightRow = styled(Row)`
  justify-content: flex-end;
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
  overflow: hidden;
  align-items: center;
  div {
    min-width: 100%;
  }
  img {
    min-width: 100%;
  }
`;

const BlockResource = ({ link, title, tags, resourceImage, topics, description, menuItems }: BlockResourceProps) => {
  return (
    <BlockElementWrapper to={link}>
      <ImageWrapper>
        <Image alt={resourceImage.alt} src={resourceImage.src} />
      </ImageWrapper>
      <BlockInfoWrapper>
        <div>
          <ResourceTitle>{title}</ResourceTitle>
        </div>
        <TopicList topics={topics} />
        <BlockDescription>{description}</BlockDescription>
        <RightRow>
          {tags && <CompressedTagList tags={tags} />}
          {menuItems && menuItems.length > 0 && <MenuButton size="small" menuItems={menuItems} />}
        </RightRow>
      </BlockInfoWrapper>
    </BlockElementWrapper>
  );
};

export default BlockResource;
