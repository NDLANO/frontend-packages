/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import SafeLink from '@ndla/safelink';
import { injectT, tType } from '@ndla/i18n';

type ItemWrapperProps = {
  backgroundImage?: string;
};

const ItemWrapper = styled.div<ItemWrapperProps>`
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
  `}
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

export type SearchSubjecItemType = {
  id: string;
  title: string;
  url: string;
  img?: { url: string };
};
type Props = {
  item: SearchSubjecItemType;
};
const SearchSubjectItem = ({ item, t }: Props & tType) => {
  const { title, url, img = null } = item; // img = null

  return (
    <>
      <ItemWrapper backgroundImage={img ? img.url : ''}>
        <ItemTitle>{title}</ItemTitle>
        <ItemText>
          <SafeLink to={url}>
            {t('searchPage.resultType.toSubjectPageLabel')}
          </SafeLink>
        </ItemText>
      </ItemWrapper>
    </>
  );
};

export default injectT(SearchSubjectItem);
