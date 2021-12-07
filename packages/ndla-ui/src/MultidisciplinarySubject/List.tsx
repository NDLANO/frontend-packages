import styled from '@emotion/styled';
import { breakpoints, mq } from '@ndla/core';

import ListItem, { ListItemProps } from './ListItem';

const Wrapper = styled.div``;
const Header = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 30px;
`;
const ListWrapper = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  ${mq.range({ from: breakpoints.tablet })} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq.range({ from: breakpoints.desktop })} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mq.range({ from: breakpoints.wide })} {
    grid-column-gap: 35px;
    grid-row-gap: 35px;
  }
`;

export type ListProps = {
  items: ListItemProps[];
  totalCount: number;
};

const List = ({ items, totalCount }: ListProps) => {
  return (
    <Wrapper>
      <Header>{totalCount} caser</Header>
      <ListWrapper>
        {items.map((item) => (
          <ListItem key={item.title} {...item} />
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

export default List;
