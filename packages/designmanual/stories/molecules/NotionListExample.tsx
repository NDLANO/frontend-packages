/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, mq } from '@ndla/core';
import NotionBlock from '../molecules/NotionBlock';

const NotionListTitleWrapper = styled.div`
  margin: 48px 0 48px;
  position: relative !important;
  right: auto !important;
  left: -16.6666666667%;
  width: 133.3333333333% !important;
  padding-left: 24px;
  padding-right: 24px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 100%;
    left: -4%;
  }
`;
const NotionListTitle = styled.h2`
  font-size: 24px;
  color: #444444;

  border-bottom: 1px solid #d1d6db;
  padding-bottom: 24px;
`;
type Notions = {
  type: 'image' | 'video' | 'H5P';
};
type Props = {
  notionBlocks: Notions[];
  title: string;
};

const NotionListExample = ({ title, notionBlocks }: Props) => {
  return (
    <>
      {notionBlocks && (
        <>
          <NotionListTitleWrapper>
            <NotionListTitle>{title}</NotionListTitle>
          </NotionListTitleWrapper>
          {notionBlocks.map((x) => (
            <NotionBlock type={x.type}></NotionBlock>
          ))}
        </>
      )}
    </>
  );
};

export default NotionListExample;
