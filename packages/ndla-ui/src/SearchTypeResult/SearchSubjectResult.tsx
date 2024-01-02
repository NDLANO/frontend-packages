/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { mq, breakpoints, spacing } from "@ndla/core";
import SearchSubjectItem, { SearchSubjecItemType } from "./SearchSubjectItem";

type ContainerProps = {
  itemCount: number;
};
const Container = styled.div<ContainerProps>`
  display: grid;
  row-gap: ${spacing.normal};
  grid-template-columns: repeat(1, 1fr);
  margin: ${spacing.medium} 0;
  ${mq.range({ from: breakpoints.tablet })} {
    column-gap: ${spacing.normal};
    margin: ${spacing.large} 0;
    ${(props) =>
      props.itemCount > 1 &&
      `
        grid-template-columns: repeat(2, 1fr);
      `}
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    ${(props) =>
      props.itemCount > 2 &&
      `
        grid-template-columns: repeat(3, 1fr);
      `}
  }
  ${mq.range({ from: breakpoints.desktop })} {
    ${(props) =>
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
    {items.map((item) => (
      <SearchSubjectItem item={item} key={`${item.id}`} />
    ))}
  </Container>
);

export default SearchSubjectResult;
