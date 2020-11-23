/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, mq } from '@ndla/core';
// @ts-ignore
import Spinner from '../Spinner';
// @ts-ignore
import constants from '../model';
import SearchItem, { SearchItemType } from './SearchItem';
import SearchSubjectTypeItem, {
  SearchSubjectTypeItemType,
} from './SearchSubjectTypeItem';

const { contentTypes } = constants;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

type ContainerProps = {
  itemCount: number;
  type: string;
};

const Container = styled.div<ContainerProps>`
  display: grid;
  row-gap: 22px;
  grid-template-columns: repeat(1, 1fr);
  ${mq.range({ from: breakpoints.tablet })} {
    column-gap: 22px;
    ${props =>
      (props.itemCount > 1 || props.type !== contentTypes.SUBJECT) &&
      `
        grid-template-columns: repeat(2, 1fr);
      `}
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    ${props =>
      (props.itemCount > 2 || props.type !== contentTypes.SUBJECT) &&
      `
        grid-template-columns: repeat(3, 1fr);
      `}
  }
  ${mq.range({ from: breakpoints.desktop })} {
    ${props =>
      (props.itemCount > 3 || props.type !== contentTypes.SUBJECT) &&
      `
        grid-template-columns: repeat(4, 1fr);
      `}
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: -1%;
  right: 0;
  bottom: 0;
  width: 102%;
  background-color: rgb(204, 204, 204, 0.1);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  padding: 10px;
`;

type Props = {
  items: Array<SearchItemType | SearchSubjectTypeItemType>;
  loading: boolean;
  type: string;
};
const SearchItems = ({ items, loading, type }: Props) => (
  <Wrapper>
    <Container itemCount={items.length} type={type}>
      {type === contentTypes.SUBJECT
        ? items.map(item => (
            <SearchSubjectTypeItem
              loading={loading}
              item={item}
              key={`${item.id}`}
            />
          ))
        : items.map((item: any) => (
            <SearchItem
              loading={loading}
              item={item}
              key={`${item.id}`}
              type={type}
            />
          ))}
    </Container>
    {loading && (
      <>
        <Overlay>
          <Spinner />
        </Overlay>
      </>
    )}
  </Wrapper>
);

export default React.memo(SearchItems);
