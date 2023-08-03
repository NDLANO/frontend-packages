/*
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { fonts } from '@ndla/core';
import NotionBlock from '../molecules/NotionBlock';

const NotionListTitle = styled.h2`
  font-size: 24px;
  color: #444444;
  font-family: ${fonts.sans};
  margin: 0;
`;

const StyledList = styled.ul`
  list-style: none;
`;
type Notions = {
  type: 'image' | 'video' | 'h5p';
};
type Props = {
  notions: Notions[];
  title: string;
};

const NotionList = ({ title, notions }: Props) => {
  return (
    <>
      {notions && (
        <>
          <NotionListTitle>{title}</NotionListTitle>
          <StyledList>
            {notions.map((notion, index) => (
              <li key={index}>
                <NotionBlock type={notion.type} hideIconsAndAuthors></NotionBlock>
              </li>
            ))}
          </StyledList>
        </>
      )}
    </>
  );
};

export default NotionList;
