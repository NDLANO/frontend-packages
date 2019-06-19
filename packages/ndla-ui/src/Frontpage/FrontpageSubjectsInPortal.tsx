/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, fonts } from '@ndla/core';
import { SafeLink } from '../index';
import { subjectProp } from './types';

const StyledHeading = styled.h1`
  margin-bottom: -${spacing.large};
`;

const StyledNav = styled.nav`
  max-width: 940px;
  max-height: calc(100vh - 200px);
  overflow-y: scroll;
`;

const StyledRow = styled.div`
  display: flex;
  margin: 0 -${spacing.normal};
  padding: ${spacing.small} 0;
  justify-content: space-between;
  > div {
    width: 33.33%;
    padding: 0 ${spacing.normal};
    ${fonts.sizes(18, 1.1)};
    font-weight: ${fonts.weight.semibold};
  }
`;
interface Props {
  illustration: string;
  title: string;
  subjects: any[];
}

const splitArrayIntoBlocks = (subjects: subjectProp[]) => {
  const chunks = [];
  for (let i = 0; i < subjects.length; i += 3) {
    chunks.push(subjects.slice(i, i + 3));
  }
  return chunks;
}

const FrontpageSubjectsInPortal: React.FunctionComponent<Props> = ({
  illustration,
  title,
  subjects,
}) => (
  <StyledNav>
    <StyledHeading>{title}</StyledHeading>
    <img src={illustration} />
    {splitArrayIntoBlocks(subjects).map(subjectChuncks => (
      <StyledRow key={subjectChuncks[0].url}>
        {subjectChuncks.map((subject: subjectProp) => (
          <div key={subject.url}>
            <SafeLink to={subject.url}>{subject.text}</SafeLink>
          </div>
        ))}
      </StyledRow>
    ))}
  </StyledNav>
);
  
export default FrontpageSubjectsInPortal;