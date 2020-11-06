import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import { Spinner } from '@ndla/editor';
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
  loading?: boolean;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
    <Container loading={loading}>
      {type === contentTypes.SUBJECT
        ? items.map(item => {
            return (
              <SearchSubjectTypeItem
                loading={loading}
                item={item}
                key={`${item.id}`}
              />
            );
          })
        : items.map((item: any) => {
            return (
              <SearchItem
                loading={loading}
                item={item}
                key={`${item.id}`}
                type={type}
              />
            );
          })}
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
