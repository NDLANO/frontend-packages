/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import parse from 'html-react-parser';

import SafeLink from '@ndla/safelink';
import { animations, colors, fonts, spacing } from '@ndla/core';

import { ContentType } from './SearchTypeResult';
import constants from '../model';
import ItemContexts, { ItemContextsType } from './components/ItemContexts';
import ItemTopicHeader from './components/ItemTopicHeader';
import ItemResourceHeader from './components/ItemResourceHeader';
const { contentTypes } = constants;

type ItemTypeProps = {
  contentType?: ContentType;
  isTopic?: boolean;
};

const Container = styled.div`
  display: flex;
  height: 400px;
  align-items: center;
  justify-content: center;
`;

const ItemWrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.brand.neutral7};
  border-radius: 5px;
  img {
    transition: all ${animations.durations.fast} ease-in-out;
  }
  :hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const ItemLink = styled(SafeLink)`
  box-shadow: none;
  color: unset;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 0;
  flex: 1;
`;

const TextWrapper = styled.div`
  padding: 0 ${spacing.normal} ${spacing.small};
`;

const ItemTitleWrapper = styled.div<ItemTypeProps>`
  margin-top: ${spacing.small};
`;

const ItemTitle = styled.h3<ItemTypeProps>`
  ${fonts.sizes('24px', '28px')};
  color: ${colors.brand.primary};
  ${(props) => props.isTopic && `margin-bottom: ${spacing.small};`};
  font-weight: ${fonts.weight.semibold};
  overflow-wrap: anywhere;
  display: inline;
  ${ItemWrapper}:hover & {
    box-shadow: inset 0 -1px;
    background-color: transparent;
  }
`;
const ItemText = styled.div<ItemTypeProps>`
  overflow: hidden;
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
  background: white;
  padding: 0 ${spacing.normal} ${spacing.small};
`;

export type SearchItemProps = {
  id: string | number;
  title: string;
  url: string;
  ingress: string;
  contexts?: ItemContextsType['contexts'];
  img?: { url: string; alt: string };
  labels?: string[];
  type?: ContentType;
  children?: ReactNode;
};
export type SearchItemType = {
  item: SearchItemProps;
  type?: ContentType;
};
const SearchItem = ({ item, type }: SearchItemType) => {
  const { title, url, ingress, contexts, img = null, labels = [], children } = item;

  const isTopic = type === contentTypes.TOPIC || type === contentTypes.MULTIDISCIPLINARY_TOPIC;

  return (
    <Container>
      <ItemWrapper>
        <ItemLink to={url}>
          {isTopic ? (
            <ItemTopicHeader image={img} type={type}>
              <ItemTitleWrapper isTopic>
                <ItemTitle isTopic>{title}</ItemTitle>
              </ItemTitleWrapper>
              <ItemText isTopic>{parse(ingress)}</ItemText>
            </ItemTopicHeader>
          ) : (
            <>
              <ItemResourceHeader labels={labels} img={img} type={type} />
              <TextWrapper>
                <ItemTitleWrapper>
                  <ItemTitle>{title}</ItemTitle>
                </ItemTitleWrapper>
                <ItemText>{parse(ingress)}</ItemText>
              </TextWrapper>
            </>
          )}
          <ContextWrapper>
            {contexts && contexts.length > 0 && <ItemContexts contexts={contexts} id={item.id} title={item.title} />}
          </ContextWrapper>
        </ItemLink>
        {children}
      </ItemWrapper>
    </Container>
  );
};

export default SearchItem;
