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
import SearchItemList from './SearchItemList';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

type ContainerProps = {
  viewType: Props['viewType'];
};

const Container = styled.div<ContainerProps>`
  display: grid;
  row-gap: ${spacing.normal};
  grid-template-columns: repeat(1, 1fr);

  ${(props) =>
    props.viewType === 'grid' &&
    `
          ${mq.range({ from: breakpoints.tablet })} {
    column-gap: ${spacing.normal};
    grid-template-columns: repeat(2, 1fr);
  }

  ${mq.range({ from: breakpoints.desktop })} {
    grid-template-columns: repeat(3, 1fr);
  }`}
`;

type Props = {
  items: SearchItemType[];
  type?: ContentType;
  viewType?: 'grid' | 'list';
};
const SearchItems = ({ items, type, viewType = 'grid' }: Props) => {
  return (
    <Wrapper>
      <Container viewType={viewType}>
        {items.map((item: any) => {
          const contentType = type || item.type;
          return (
            <>
              {viewType === 'list' ? (
                <SearchItemList item={item} key={`${item.id}`} type={contentType} />
              ) : (
                <SearchItem item={item} key={`${item.id}`} type={contentType} />
              )}
            </>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default React.memo(SearchItems);
