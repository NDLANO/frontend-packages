import React from 'react';
import styled from '@emotion/styled';
import { SafeLinkButton } from '@ndla/safelink';
import { breakpoints, colors, fonts, mq } from '@ndla/core';

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
  & > * {
    margin-bottom: 1px;
  }
`;
const StyledButtonContent = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const StyledButtonContentText = styled.span``;
const StyledButtonContentSelected = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${colors.white};
  flex-shrink: 0;
`;

export type ItemProps = {
  url: string;
  label: string;
  selected?: boolean;
};
type Props = {
  heading?: string;
  colorMode?: 'dark' | 'light' | 'lighterGrey';
  items: [ItemProps];
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export const NavigationBox = ({
  heading,
  colorMode = 'dark',
  items,
  onClick,
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
            lighterGrey={colorMode === 'lighterGrey'}
            darker={item.selected}
            buttonSize="medium"
            borderShape="sharpened"
            width="full"
            textAlign="left"
            onClick={onClick}>
            <StyledButtonContent>
              <StyledButtonContentText>{item.label}</StyledButtonContentText>
              {item.selected && <StyledButtonContentSelected />}
            </StyledButtonContent>
          </SafeLinkButton>
        </StyledListItem>
      ))}
    </StyledList>
  </StyledWrapper>
);

export default NavigationBox;
