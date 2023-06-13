/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import SafeLink from '@ndla/safelink';
import { Forward, CalendarEd } from '@ndla/icons/common';
import { breakpoints, colors, spacing, mq, misc } from '@ndla/core';
import language from 'react-syntax-highlighter/dist/esm/languages/hljs/1c';

interface Props {
  title: string;
  language: string;
  date: string;
  url: string;
}

const StyledForward = styled(Forward)`
  margin: 0 ${spacing.nsmall};
  min-width: 20px;
  min-height: 20px;
  `;

  const StyledH3 = styled.h3`
    margin: 0;
  `;

const StyledSafeLink = styled(SafeLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: none;
  color: inherit;
  border: 1px solid ${colors.brand.lighter};
  padding: ${spacing.normal};
  ${mq.range({ from: breakpoints.tabletWide })} {
    &:hover {
      & ${StyledH3} {
        text-decoration: underline;
      }
      & ${StyledForward} {
        width: 32px;
        height: 32px;
      }
    }
    &:focus-visible {
      border: 2px solid ${colors.brand.dark};
    }
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    & ${StyledH3} {
      text-decoration: underline;
    }
    :active ${StyledH3} {
      text-decoration: none;
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
`;

const StyledDateContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${spacing.xsmall};
  gap: ${spacing.small};
`;

const StyledCalenderEd = styled(CalendarEd)`
  color: ${colors.icon.iconBlue};
`;

const LinkBlock = ({ title, language, date, url }: Props) => {
  return (
    <StyledSafeLink to={url}>
      <InfoWrapper>
        <StyledH3 lang={language}>{title}</StyledH3>
        {date && (
          <StyledDateContainer>
            <StyledCalenderEd />
            <span>{date}</span>
          </StyledDateContainer>
        )}
      </InfoWrapper>
      <StyledForward/>
    </StyledSafeLink>
  );
};

export default LinkBlock;
