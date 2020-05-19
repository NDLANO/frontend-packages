import React from 'react';
import styled from '@emotion/styled';
import { SafeLinkButton } from '@ndla/safelink';

const StyledWrapper = styled.nav``;
const StyledHeading = styled.h2``;
const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  column-count: 3;
  column-gap: 20px;
`;
const StyledListItem = styled.li`
  margin-bottom: 20px;
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
    {heading && <StyledHeading>{heading}</StyledHeading>}
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
