import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import SafeLink from '@ndla/safelink';
import { breakpoints, mq } from '@ndla/core';

type WrapperProps = {
  loading?: boolean;
  backgroundImage?: string;
};

const ItemWrapper = styled.div<WrapperProps>`
  background: #deebf6;
  padding: 20px 30px;
  border-radius: 5px;
  height: 150px;
  ${props =>
    props.backgroundImage !== '' &&
    `
    background-image: url(${props.backgroundImage});
    background-repeat: no-repeat;
    background-repeat: no-repeat;
    background-position-y: 100%;
    background-position-x: 100%;
    background-size: auto 100px;
  }`}

  ${mq.range({ until: breakpoints.tabletWide })} {
    flex: 1 0 100%;
    max-width: none;
    margin-bottom: 16px;
    &:nth-of-type(odd) {
      margin-right: 0px;
    }
    &:nth-of-type(even) {
      margin-left: 0px;
    }
    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  ${mq.range({ from: breakpoints.tabletWide })} {
    flex: 1 0 48%;
    max-width: 50%;
    margin-bottom: 16px;
    &:nth-of-type(odd) {
      margin-right: 8px;
    }
    &:nth-of-type(even) {
      margin-left: 8px;
    }
    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  ${mq.range({ from: breakpoints.desktop })} {
    max-width: 533px;
    margin-bottom: 32px;
    &:nth-of-type(odd) {
      margin-right: 16px;
    }
    &:nth-of-type(even) {
      margin-left: 16px;
    }
    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  ${props =>
    props.loading &&
    `
    opacity: 0.6;
    z-index: 0;
  }`}
`;

const ItemContent = styled.div`
  /* flex-grow: 1; */
`;

const ItemTitle = styled.h2`
  font-size: 18px;
  line-height: 18px;
  margin-top: 8px;
`;
const ItemText = styled.span`
  a {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
  }
`;

export type SearchSubjectTypeItemType = {
  id: string;
  title: string;
  url: string;
  img?: { url: string };
};
type Props = {
  item: SearchSubjectTypeItemType;
  loading: boolean;
};
const SearchSubjectTypeItem = ({ item, loading }: Props) => {
  const { title, url, img = null } = item; // img = null

  return (
    <>
      <ItemWrapper loading={loading} backgroundImage={img ? img.url : ''}>
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemText>
            <SafeLink to={url}>Gå til fagsiden</SafeLink>
          </ItemText>
        </ItemContent>
      </ItemWrapper>
    </>
  );
};

export default SearchSubjectTypeItem;
