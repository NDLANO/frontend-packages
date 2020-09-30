import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import { ChevronRight } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import BEMHelper from 'react-bem-helper';

import { breakpoints, mq } from '@ndla/core';

const searchResultItemClasses = BEMHelper('c-search-result-item');

type WrapperProps = {
  loading?: boolean;
};

const ItemWrapper = styled.div<WrapperProps>`
  flex-direction: column;
  margin: 16px 16px 20px;
  ${mq.range({ from: breakpoints.mobile })} {
    margin: 16px 0px 16px;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    margin: 16px 16px 20px;
    flex: 1 0 47%;
    max-width: 48%;
    &:nth-of-type(1n) {
      margin-left: 0;
    }
    &:nth-of-type(2n) {
      margin-right: 0;
      margin-left: 16px;
    }
  }

  ${mq.range({ from: breakpoints.desktop })} {
    flex: 1 0 21%;
    max-width: 252px;
    &:nth-of-type(1n) {
      margin-left: 16px;
    }
    &:nth-of-type(2n) {
      margin-right: 16px;
    }
    &:first-of-type {
      margin-left: 0;
    }
    &:nth-of-type(4n) {
      margin-right: 0;
    }
    &:nth-of-type(4n + 5) {
      margin-left: 0px;
    }
  }

  ${props =>
    props.loading &&
    `
    opacity: 0.6;
    z-index: 0;
  }`}
`;

const ItemHead = styled.div`
  height: auto;
  min-height: 45px;
  position: relative;
  a {
    box-shadow: none;
  }
  ${mq.range({ until: breakpoints.tablet })} {
    max-height: 312px;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    max-height: 144px;
  }
  img {
    border-radius: 5px;
  }
`;

const ImateIcon = styled.div`
  height: 144px;
  background: #ccc;
  border-radius: 5px;
`;

const ItemPillWrapper = styled.div`
  margin-top: 8px;
`;
const ItemPill = styled.div`
  margin: 4px 4px 4px 0;
  display: inline-block;
`;
const ItemContent = styled.div`
  /* flex-grow: 1; */
`;

const ItemTitle = styled.h3`
  font-size: 18px;
  line-height: 24px;
  margin-top: 14px;
`;
const ItemText = styled.p`
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 16px;
`;
const BreadcrumbPath = styled.div`
  color: #ccc;
  font-size: 14px;
  line-height: 20px;
`;
export type SearchItemType = {
  id: string;
  title: string;
  url: string;
  ingress: string;
  breadcrumb: Array<string>;
  image: React.ReactNode | null;
  img?: { url: string; alt: string };
  contentTypeLabel: string | null;
  type: string | null;
};
type Props = {
  item: SearchItemType;
  loading: boolean;
};
const SearchItem = ({ item, loading }: Props) => {
  const {
    title,
    url,
    ingress,
    breadcrumb,
    type = null,
    contentTypeLabel = null,
    img = null,
  } = item;
  const ItemPillLabels = (
    <ItemPillWrapper>
      {type && (
        <ItemPill {...searchResultItemClasses('pills')}>{item.type}</ItemPill>
      )}
      {contentTypeLabel && (
        <ItemPill {...searchResultItemClasses('pills')}>
          {contentTypeLabel}
        </ItemPill>
      )}
    </ItemPillWrapper>
  );
  return (
    <>
      <ItemWrapper loading={loading}>
        <ItemHead>
          {img ? (
            <SafeLink to={url}>
              <img src={img.url} alt={img.alt} />
            </SafeLink>
          ) : (
            <SafeLink to={url}>
              <ImateIcon />
            </SafeLink>
          )}
        </ItemHead>
        <ItemContent>
          <ItemTitle>
            <SafeLink to={url}>{title}</SafeLink>
            {ItemPillLabels}
          </ItemTitle>
          <ItemText>{ingress}</ItemText>
          <BreadcrumbPath>
            {breadcrumb &&
              breadcrumb.map((breadcrumbItem: string, i: number) => {
                return (
                  <span key={`${breadcrumbItem}-${item.id}`}>
                    <span>{breadcrumbItem}</span>
                    {i !== breadcrumb.length - 1 && <ChevronRight />}
                  </span>
                );
              })}
          </BreadcrumbPath>
        </ItemContent>
      </ItemWrapper>
    </>
  );
};

export default SearchItem;
