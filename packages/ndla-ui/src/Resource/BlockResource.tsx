/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import SafeLink from '@ndla/safelink';
import { colors, fonts, spacing } from '@ndla/core';
import { MenuButton } from '@ndla/button';
import Image from '../Image';
import { ResourceImageProps, ResourceTitle, Row, TagList, TopicList } from './resourceComponents';

interface BlockResourceProps {
  link: string;
  title: string;
  resourceImage: ResourceImageProps;
  topics: string[];
  tags?: string[];
  description?: string;
  actionMenu?: ReactNode;
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

const TagCounterWrapper = styled.p`
  color: ${colors.brand.primary};
  box-shadow: none;
  margin: 0;
  font-weight: 600;
  ${fonts.sizes(16)}
  &hover {
    color: grey;
  }
`;

const BlockResource = ({ link, title, tags, resourceImage, topics, description, actionMenu }: BlockResourceProps) => {
  function CheckTagsLength(tags: string[]) {
    if (tags.length > 3) {
      return (
        <>
          <TagList tags={tags.slice(0, 3)} />{' '}
          <MenuButton
            hideMenuIcon={true}
            menuItems={tags.slice(3, tags.length).map((tag) => {
              return {
                text: '#' + tag,
                onClick: () => {},
              };
            })}>
            <TagCounterWrapper>+ {tags?.length - 3}</TagCounterWrapper>
          </MenuButton>
        </>
      );
    } else {
      return <TagList tags={tags} />;
    }
  }

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
          {tags && CheckTagsLength(tags)}
          {actionMenu}
        </RightRow>
      </BlockInfoWrapper>
    </BlockElementWrapper>
  );
};

export default BlockResource;
