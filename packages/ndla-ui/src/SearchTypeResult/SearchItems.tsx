/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { memo } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { breakpoints, mq, spacing } from '@ndla/core';
import SearchItem, { SearchItemProps } from './SearchItem';
import SearchItemList from './SearchItemList';
import { ContentType } from './SearchTypeResult';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

interface ContainerProps {
  viewType: Props['viewType'];
}

const Container = styled.ul<ContainerProps>`
  display: grid;
  align-items: flex-start;
  list-style: none;
  row-gap: ${spacing.normal};
  grid-template-columns: repeat(1, 1fr);

  ${(props) =>
    props.viewType === 'grid' &&
    css`
      ${mq.range({ from: breakpoints.tablet })} {
        column-gap: ${spacing.normal};
        grid-template-columns: repeat(2, 1fr);
      }

      ${mq.range({ from: breakpoints.desktop })} {
        grid-template-columns: repeat(3, 1fr);
      }
    `}
`;

interface Props {
  items: SearchItemProps[];
  type?: ContentType;
  viewType?: 'grid' | 'list';
}

const SearchItems = ({ items, type, viewType = 'grid' }: Props) => {
  return (
    <Wrapper>
      <Container aria-labelledby={`searchitem-header-${type}`} viewType={viewType}>
        {items.map((item) => {
          const contentType = type || item.type;
          const Component = viewType === 'list' ? SearchItemList : SearchItem;
          return (
            <li key={`${item.id}`}>
              <Component item={item} type={contentType} />
            </li>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default memo(SearchItems);
