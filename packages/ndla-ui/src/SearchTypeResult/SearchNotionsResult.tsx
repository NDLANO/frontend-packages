/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { fonts, mq, breakpoints, spacing } from '@ndla/core';
// @ts-ignore
import Button from '@ndla/button';
import { withTranslation, WithTranslation } from 'react-i18next';
import SearchNotionItem, { SearchNotionItemProps } from './SearchNotionItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing.medium} 0;
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.medium};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.24);
    border-radius: 5px;
    margin: ${spacing.large} 0;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding: ${spacing.medium} 66px;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing.small};
`;
const Heading = styled.h2`
  margin: 0;
  ${fonts.sizes('20px', '45px')};
  text-transform: uppercase;
`;

const HeadingCount = styled.span`
  font-weight: 400;
  margin-left: ${spacing.small};
  text-transform: lowercase;
`;

const ButtonRemoveText = styled.span`
  ${fonts.sizes('18px', '22px')};
`;

type Props = {
  items: SearchNotionItemProps[];
  totalCount: number;
  onRemove: () => void;
  renderMarkdown: (text: React.ReactNode) => string;
};

const SearchNotionsResult = ({ items, totalCount, onRemove, renderMarkdown, t }: Props & WithTranslation) => (
  <Wrapper>
    <HeadingWrapper>
      <Heading>
        {t(`searchPage.resultType.notionsHeading`)}
        <HeadingCount>{t(`searchPage.resultType.hits`, { count: totalCount })}</HeadingCount>
      </Heading>
      <Button onClick={onRemove} link>
        <ButtonRemoveText>{t(`searchPage.resultType.notionsRemove`)}</ButtonRemoveText>
      </Button>
    </HeadingWrapper>
    {items.map((item) => (
      <SearchNotionItem key={item.id} {...item} renderMarkdown={renderMarkdown} />
    ))}
  </Wrapper>
);

export default withTranslation()(SearchNotionsResult);
