/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from 'html-react-parser';
import { ReactNode, useRef } from 'react';
import styled from '@emotion/styled';

import { animations, colors, fonts, spacing } from '@ndla/core';
import SafeLink from '@ndla/safelink';

import ItemContexts, { ItemContextsType } from './components/ItemContexts';
import ItemResourceHeader from './components/ItemResourceHeader';
import ItemTopicHeader from './components/ItemTopicHeader';
import { ContentType } from './SearchTypeResult';
import constants from '../model';
const { contentTypes } = constants;

interface ItemTypeProps {
  contentType?: ContentType;
  isTopic?: boolean;
}

const Container = styled.article`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
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

const ButtonWrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.h3<ItemTypeProps>`
  display: inline;
  ${fonts.sizes('24px', '28px')};
  color: ${colors.brand.primary};
  margin-bottom: ${(props) => props.isTopic && spacing.small};
  font-weight: ${fonts.weight.semibold};
  overflow-wrap: break-word;
  margin: 0;
  ${Container}:hover & {
    box-shadow: 0 -1px inset;
  }
`;

const StyledLink = styled(SafeLink)`
  box-shadow: none;
  color: ${colors.brand.primary};

  :after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const ItemText = styled.div<ItemTypeProps>`
  ${fonts.sizes('16px', '24px')};
  ${(props) =>
    props.isTopic &&
    `
    ${fonts.sizes('18px', '28px')};
    `};
`;

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  padding: ${spacing.small} ${spacing.normal};
`;

const ButtonContainer = styled.div`
  z-index: 1;
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
  const { title, url, ingress, contexts = [], img = null, labels = [], children } = item;
  const linkRef = useRef<HTMLAnchorElement>(null);

  const isTopic = type === contentTypes.TOPIC || type === contentTypes.MULTIDISCIPLINARY_TOPIC;

  return (
    <Container>
      {isTopic ? (
        <ItemTopicHeader image={img} type={type}>
          <StyledLink to={url} ref={linkRef}>
            <ItemTitle>{title}</ItemTitle>
          </StyledLink>
        </ItemTopicHeader>
      ) : (
        <ItemResourceHeader labels={labels} img={img} type={type} />
      )}
      <ContentWrapper>
        {!isTopic && (
          <StyledLink to={url} ref={linkRef}>
            <ItemTitle>{title}</ItemTitle>
          </StyledLink>
        )}
        <ItemText isTopic={isTopic}>{parse(ingress)}</ItemText>
        {contexts.length > 0 && <ItemContexts contexts={contexts} id={item.id} title={item.title} />}
      </ContentWrapper>
      <ButtonWrapper>{children}</ButtonWrapper>
    </Container>
  );
};

export default SearchItem;
