/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { mq, breakpoints } from '@ndla/core';
import SearchSubjectItem, { SearchSubjecItemType } from './SearchSubjectItem';

type ContainerProps = {
  itemCount: number;
};
const Container = styled.div<ContainerProps>`
  display: grid;
  row-gap: 22px;
  grid-template-columns: repeat(1, 1fr);
  margin: 80px 0;
  ${mq.range({ from: breakpoints.tablet })} {
    column-gap: 22px;
    ${props =>
      props.itemCount > 1 &&
      `
        grid-template-columns: repeat(2, 1fr);
      `}
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    ${props =>
      props.itemCount > 2 &&
      `
        grid-template-columns: repeat(3, 1fr);
      `}
  }
  ${mq.range({ from: breakpoints.desktop })} {
    ${props =>
      props.itemCount > 3 &&
      `
        grid-template-columns: repeat(4, 1fr);
      `}
  }
`;

type Props = {
  items: SearchSubjecItemType[];
};

const SearchSubjectResult = ({ items }: Props) => (
  <Container itemCount={items.length}>
    {items.map(item => (
      <SearchSubjectItem item={item} key={`${item.id}`} />
    ))}
  </Container>
);

export default SearchSubjectResult;
