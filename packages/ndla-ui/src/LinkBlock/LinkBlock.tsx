/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import SafeLink from '@ndla/safelink';
import { Forward, CalendarEd } from '@ndla/icons/common';
import { breakpoints, colors, fonts, spacing, mq, misc } from '@ndla/core';

interface Props {
  title: {
    title: string;
    language: string;
  };
  date: Date;
  url: string;
}

const StyledSafeLink = styled(SafeLink)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: none;
  color: inherit;
`;

const InfoWrapper = styled.div`
  gap: ${spacing.small};
`;

const StyledH3 = styled.h3`
  margin: 0;
`;

const StyledDateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.small};
`;

const StyledCalenderEd = styled(CalendarEd)`
  color: ${colors.icon.iconBlue}; 
`;

const LinkBlock = ({ url }: Props) => {
  return (
    <StyledSafeLink to={url}>
      <InfoWrapper>
        <StyledH3>Redaksjonell medarbeider i faget spansk 2</StyledH3>
        <StyledDateContainer>
          <StyledCalenderEd />
          <div>05. mars 2023</div>
        </StyledDateContainer>
      </InfoWrapper>
      <Forward />
    </StyledSafeLink>
  );
};

export default LinkBlock;
