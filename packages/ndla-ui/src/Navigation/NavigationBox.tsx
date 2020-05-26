import React from 'react';
import styled from '@emotion/styled';
import { SafeLinkButton } from '@ndla/safelink';
import { breakpoints, fonts, mq } from '@ndla/core';

const StyledWrapper = styled.nav`
  margin: 20px 0 60px;
`;
const StyledHeading = styled.h2`
  ${fonts.sizes('18px', '32px')};
  text-transform: uppercase;
  margin-bottom: 10px;
`;
const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  ${mq.range({ from: breakpoints.tablet })} {
    column-count: 2;
    column-gap: 20px;
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    column-count: 3;
    column-gap: 20px;
  }
`;
const StyledListItem = styled.li`
  margin-bottom: 2px;
  ${mq.range({ from: breakpoints.tablet })} {
    margin-bottom: 20px;
  }
`;
const StyledButtonContent = styled.span`
  width: 100%;
`;

export type ItemProps = {
  url: string;
  label: string;
  selected?: boolean;
};
type Props = {
  heading?: string;
  colorMode?: 'dark' | 'light';
  items: [ItemProps];
};

export const NavigationBox = ({
  heading,
  colorMode = 'dark',
  items,
}: Props) => (
  <StyledWrapper>
    {heading && (
      <StyledHeading>
        {heading} ({items.length})
      </StyledHeading>
    )}
    <StyledList>
      {items.map((item: ItemProps) => (
        <StyledListItem key={item.label}>
          <SafeLinkButton
            to={item.url}
            lighter={colorMode === 'light'}
            buttonSize="medium"
            borderShape="sharpened"
            width="full"
            textAlign="left">
            <StyledButtonContent>{item.label}</StyledButtonContent>
          </SafeLinkButton>
        </StyledListItem>
      ))}
    </StyledList>
  </StyledWrapper>
);

export default NavigationBox;
