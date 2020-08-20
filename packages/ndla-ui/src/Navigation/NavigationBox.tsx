import React from 'react';
import styled from '@emotion/styled';
import { SafeLinkButton } from '@ndla/safelink';
// @ts-ignore
import Button from '@ndla/button';
import { breakpoints, colors, fonts, misc, mq } from '@ndla/core';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { css } from '@emotion/core';
import { Switch } from '@ndla/switch';
import { uuid } from '@ndla/util';

const StyledWrapper = styled.nav`
  margin: 20px 0 34px;
`;
const StyledHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

type InvertItProps = {
  invertedStyle?: boolean;
};

const StyledHeading = styled.h2<InvertItProps>`
  ${fonts.sizes('18px', '32px')};
  text-transform: uppercase;
  margin: 0 0 10px;
  ${props =>
    props.invertedStyle &&
    css`
      color: #fff;
    `}
`;

type listProps = {
  direction?: 'horizontal' | 'vertical';
};
const StyledList = styled.ul<listProps>`
  list-style: none;
  margin: 0;
  padding: 0;
  ${mq.range({ from: breakpoints.tablet })} {
    column-count: 2;
    column-gap: 20px;
    ${props =>
      props.direction === 'vertical' &&
      css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      `}
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    column-count: 3;
    column-gap: 20px;
    ${props =>
      props.direction === 'vertical' &&
      css`
        grid-template-columns: repeat(3, 1fr);
      `}
  }
`;
type additionalResourceProps = {
  isAdditionalResource?: boolean;
  lighter?: boolean;
  selected?: boolean;
};

const StyledListItem = styled.li<additionalResourceProps>`
  margin-bottom: 2px;
  ${mq.range({ from: breakpoints.tablet })} {
    margin-bottom: 20px;
  }
  ${props =>
    props.isAdditionalResource &&
    css`
      position: relative;
      & > * {
        border: 1px dashed
          ${props.lighter && !props.selected
            ? `${colors.brand.tertiary}`
            : `${colors.brand.dark}`};
        background-clip: padding-box;
        :hover,
        :focus {
          border: 1px dashed ${colors.brand.dark};
          background-clip: padding-box;
          color: ${colors.white};
          ${StyledAdditionalResourceMark} {
            color: ${colors.white};
            border-color: ${colors.white};
          }
        }
      }
    `}
`;

const StyledButtonContent = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const StyledButtonContentText = styled.span<additionalResourceProps>`
  ${props => props.isAdditionalResource && `padding-left: 13px;`}
`;
const StyledAdditionalResourceMark = styled.span<additionalResourceProps>`
  color: ${props =>
    props.lighter && !props.selected
      ? `${colors.brand.dark}`
      : `${colors.white}`};
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid
    ${props =>
      props.lighter && !props.selected
        ? `${colors.brand.dark}`
        : `${colors.white}`};
  border-radius: 100px;
  position: absolute;
  left: 7px;
  top: 6px;
  transition: ${misc.transition.default};
`;
const StyledButtonContentSelected = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${colors.white};
  flex-shrink: 0;
`;

export type ItemProps = {
  url?: string;
  label: string;
  id?: string;
  selected?: boolean;
  isAdditionalResource?: boolean;
};
type Props = {
  heading?: string;
  colorMode?: 'dark' | 'light' | 'lighterGrey';
  isButtonElements?: boolean;
  items: ItemProps[];
  onClick?: (event: React.MouseEvent<HTMLElement>, id?: string) => void;
  hasAdditionalResources?: boolean;
  showAdditionalResources?: boolean;
  listDirection?: 'horizontal' | 'vertical';
  invertedStyle?: boolean;
  onToggleAdditionalResources?: React.ChangeEventHandler<HTMLInputElement>;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

export const NavigationBox = ({
  heading,
  colorMode = 'dark',
  items,
  isButtonElements,
  onClick,
  hasAdditionalResources,
  showAdditionalResources = false,
  listDirection = 'vertical',
  invertedStyle,
  onToggleAdditionalResources = () => {},
  t,
}: Props) => {
  const ListElementType = isButtonElements ? Button : SafeLinkButton;
  return (
    <StyledWrapper>
      <StyledHeadingWrapper>
        {heading && (
          <StyledHeading invertedStyle={invertedStyle}>{heading}</StyledHeading>
        )}
        {hasAdditionalResources && (
          <Switch
            id={uuid()}
            checked={showAdditionalResources}
            label={t('navigation.additionalTopics')}
            onChange={onToggleAdditionalResources}
            css={invertedStyle ? { color: '#fff' } : {}}
          />
        )}
      </StyledHeadingWrapper>
      <StyledList data-testid="nav-box-list" direction={listDirection}>
        {items.map((item: ItemProps) => (
          <StyledListItem
            isAdditionalResource={item.isAdditionalResource}
            lighter={colorMode === 'light'}
            selected={item.selected}
            key={item.label}
            data-testid="nav-box-item">
            <ListElementType
              to={item.url}
              lighter={!item.selected && colorMode === 'light'}
              lighterGrey={!item.selected && colorMode === 'lighterGrey'}
              darker={item.selected}
              buttonSize="medium"
              size="medium"
              borderShape="sharpened"
              width="full"
              textAlign="left"
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                if (onClick) {
                  onClick(e, item.id);
                }
              }}>
              <StyledButtonContent>
                <StyledButtonContentText
                  isAdditionalResource={item.isAdditionalResource}
                  lighter={colorMode === 'light'}>
                  {item.isAdditionalResource && (
                    <StyledAdditionalResourceMark
                      lighter={colorMode === 'light'}
                      selected={item.selected}>
                      T
                    </StyledAdditionalResourceMark>
                  )}
                  {item.label}
                </StyledButtonContentText>
                {item.selected && <StyledButtonContentSelected />}
              </StyledButtonContent>
            </ListElementType>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

export default injectT(NavigationBox);
