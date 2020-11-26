/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { fonts, mq, breakpoints } from '@ndla/core';
// @ts-ignore
import Button from '@ndla/button';
import { injectT, tType } from '@ndla/i18n';
import SearchNotionItem, { SearchNotionItemProps } from './SearchNotionItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  ${mq.range({ from: breakpoints.tablet })} {
    padding: 32px 36px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.24);
    border-radius: 5px;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding: 32px 66px;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const Heading = styled.h2`
  margin: 0;
  ${fonts.sizes('20px', '45px')};
  text-transform: uppercase;
`;

const HeadingCount = styled.span`
  font-weight: 400;
  margin-left: 10px;
  text-transform: lowercase;
`;

const ButtonRemoveText = styled.span`
  ${fonts.sizes('18px', '22px')};
`;

type Props = {
  items: SearchNotionItemProps[];
  totalCount: number;
  onRemove: () => void;
};

const SearchNotionsResult = ({
  items,
  totalCount,
  onRemove,
  t,
}: Props & tType) => (
  <Wrapper>
    <HeadingWrapper>
      <Heading>
        {t(`searchPage.resultType.notionsHeading`)}
        <HeadingCount>
          {t(`searchPage.resultType.hits`, { count: totalCount })}
        </HeadingCount>
      </Heading>
      <Button onClick={onRemove} link>
        <ButtonRemoveText>
          {t(`searchPage.resultType.notionsRemove`)}
        </ButtonRemoveText>
      </Button>
    </HeadingWrapper>
    {items.map(item => (
      <SearchNotionItem key={item.id} {...item} />
    ))}
  </Wrapper>
);

export default injectT(SearchNotionsResult);
