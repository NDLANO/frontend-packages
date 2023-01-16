/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode, useRef } from 'react';
import styled from '@emotion/styled';
import parse from 'html-react-parser';

import SafeLink from '@ndla/safelink';
import { animations, colors, fonts, misc, spacing } from '@ndla/core';

import { ContentType } from './SearchTypeResult';
import constants from '../model';
import ItemContexts, { ItemContextsType } from './components/ItemContexts';
import ItemTopicHeader from './components/ItemTopicHeader';
import ItemResourceHeader from './components/ItemResourceHeader';
const { contentTypes } = constants;

interface ItemTypeProps {
  contentType?: ContentType;
  isTopic?: boolean;
}

const Container = styled.div`
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 400px;
  border-radius: 5px;
  border: 1px solid ${colors.brand.neutral7};

  img {
    transition: all ${animations.durations.fast} ease-in-out;
  }
  :hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const ItemTitle = styled.h3<ItemTypeProps>`
  display: inline;
  ${fonts.sizes('24px', '28px')};
  color: ${colors.brand.primary};
  margin-bottom: ${(props) => props.isTopic && spacing.small};
  font-weight: ${fonts.weight.semibold};
  overflow-wrap: anywhere;
  margin: 0;
  ${Container}:hover & {
    box-shadow: 0 -1px inset;
  }
`;

const StyledLink = styled(SafeLink)`
  display: block;
  box-shadow: none;
  margin-top: ${spacing.small};
  color: ${colors.brand.primary};
`;

const ItemText = styled.div<ItemTypeProps>`
  ${fonts.sizes('16px', '24px')};
  word-break: break-word;
  overflow-wrap: anywhere;
  margin-top: ${spacing.small};
  ${(props) =>
    props.isTopic &&
    `
    ${fonts.sizes('18px', '28px')};
    `};
`;

const ContextWrapper = styled.div`
  align-self: flex-start;
  background: white;
`;

const ContentWrapper = styled.div`
  margin-top: auto;
  padding: 0 ${spacing.normal} ${spacing.small};
`;

export interface SearchItemProps {
  id: string | number;
  title: string;
  url: string;
  ingress: string;
  contexts?: ItemContextsType['contexts'];
  img?: { url: string; alt: string };
  labels?: string[];
  type?: ContentType;
  children?: ReactNode;
}

export interface SearchItemType {
  item: SearchItemProps;
  type?: ContentType;
}

const SearchItem = ({ item, type }: SearchItemType) => {
  const { title, url, ingress, contexts, img = null, labels = [], children } = item;
  const linkRef = useRef<HTMLAnchorElement>(null);

  const isTopic = type === contentTypes.TOPIC || type === contentTypes.MULTIDISCIPLINARY_TOPIC;

  const handleClick = () => {
    if (linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <Container onClick={handleClick} role="presentation">
      {isTopic ? (
        <ItemTopicHeader image={img} type={type}>
          <StyledLink to={url} ref={linkRef}>
            <ItemTitle>{title}</ItemTitle>
          </StyledLink>
          <ItemText isTopic>{parse(ingress)}</ItemText>
        </ItemTopicHeader>
      ) : (
        <ItemResourceHeader labels={labels} img={img} type={type} />
      )}
      <ContentWrapper>
        {!isTopic && (
          <>
            <StyledLink to={url} ref={linkRef}>
              <ItemTitle>{title}</ItemTitle>
            </StyledLink>
            <ItemText>{parse(ingress)}</ItemText>
          </>
        )}
        <ContextWrapper>
          {contexts && contexts.length > 0 && <ItemContexts contexts={contexts} id={item.id} title={item.title} />}
        </ContextWrapper>
      </ContentWrapper>
      {children}
    </Container>
  );
};

export default SearchItem;
