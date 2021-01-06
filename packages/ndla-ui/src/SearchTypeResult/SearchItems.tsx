/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, mq, spacing } from '@ndla/core';
import SearchItem, { SearchItemType } from './SearchItem';
import { ContentType } from './SearchTypeResult';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

type ContainerProps = {
  itemCount: number;
  type?: string;
};

const Container = styled.div<ContainerProps>`
  display: grid;
  row-gap: ${spacing.normal};
  grid-template-columns: repeat(1, 1fr);
  ${mq.range({ from: breakpoints.tablet })} {
    column-gap: ${spacing.normal};
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mq.range({ from: breakpoints.desktop })} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

type Props = {
  items: SearchItemType[];
  type?: ContentType;
};
const SearchItems = ({ items, type }: Props) => (
  <Wrapper>
    <Container itemCount={items.length} type={type}>
      {items.map((item: any) => (
        <SearchItem item={item} key={`${item.id}`} type={type} />
      ))}
    </Container>
  </Wrapper>
);

export default React.memo(SearchItems);
