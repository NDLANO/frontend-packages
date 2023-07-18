import React, { MouseEvent, memo, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { SafeLinkButton } from '@ndla/safelink';
import { ButtonV2 } from '@ndla/button';
import { breakpoints, colors, misc, mq, spacing } from '@ndla/core';
import { css } from '@emotion/react';
import { Switch } from '@ndla/switch';
import { uuid } from '@ndla/util';
import { useTranslation } from 'react-i18next';
import { HumanMaleBoard } from '@ndla/icons/common';
import { Heading } from '../Typography';

const StyledWrapper = styled.nav`
  margin: 20px 0 34px;
`;
const StyledHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const StyledHeading = styled(Heading)`
  &[data-inverted='true'] {
    color: ${colors.white};
  }
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  &[data-direction='vertical'],
  &[data-direction='horizontal'] {
    ${mq.range({ from: breakpoints.tablet })} {
      column-count: 2;
      column-gap: 20px;
      &[data-direction='horizontal'] {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }
    ${mq.range({ from: breakpoints.tabletWide })} {
      column-count: 3;
      column-gap: 20px;
      &[data-direction='horizontal'] {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
  &[data-direction='horizontal'] {
    ${mq.range({ from: breakpoints.tablet })} {
      column-count: 2;
      column-gap: 20px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const StyledListItem = styled.li`
  margin-bottom: 0;
  break-inside: avoid;
  &[data-direction='floating'] {
    display: inline-block;
    margin: 0 ${spacing.xsmall} ${spacing.xsmall} 0;
    ${mq.range({ until: breakpoints.mobileWide })} {
      display: block;
    }
  }
`;

const StyledAdditionalResourceMark = styled.span`
  color: ${colors.white};
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid ${colors.white};
  border-radius: 100px;
  transition: ${misc.transition.default};
  &[data-lighter='true'][data-selected='false'] {
    color: ${colors.brand.dark};
    border-color: ${colors.brand.dark};
  }
`;

const StyledListElementWrapper = styled.div`
  position: relative;
  &[data-additional='true'] {
    & > * {
      border-width: 1px;
      border-style: dashed;
      background-clip: padding-box;
      border-color: ${colors.brand.dark};
      &[data-selected='true'][data-ligher='true'] {
        border-color: ${colors.brand.tertiary};
      }
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
  }
`;

const StyledSpacingElement = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  ${mq.range({ from: breakpoints.tablet })} {
    height: 20px;
  }
`;

const StyledButtonContent = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const StyledButtonContentText = styled.span`
  &[data-additional='true'],
  &[data-restricted='true'] {
    padding-left: ${spacing.small};
  }
  &[data-additional='true'][data-restricted='true'] {
    padding-left: ${spacing.medium};
  }
`;

const StyledMarksWrapper = styled.span`
  position: absolute;
  left: 7px;
  top: 6px;
  display: flex;
  align-items: center;
  & > * {
    margin-left: ${spacing.xxsmall};
  }
  span:first-of-type {
    margin-left: 0;
  }
`;

const StyledHumanBoardIconWrapper = styled.span`
  display: flex;
`;
const StyledButtonContentSelected = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${colors.white};
  flex-shrink: 0;
  margin-left: ${spacing.small};
`;

const listElementStyle = css`
  display: flex;
  flex: 1;
  text-align: left;
`;

export type ItemProps = {
  url?: string;
  label: string;
  id?: string;
  selected?: boolean;
  isAdditionalResource?: boolean;
  isRestrictedResource?: boolean;
};

type ColorMode = 'primary' | 'darker' | 'light' | 'greyLightest' | 'greyLighter';
type ListDirection = 'horizontal' | 'vertical' | 'floating';

type Props = {
  heading?: string;
  colorMode?: ColorMode;
  isButtonElements?: boolean;
  items?: ItemProps[];
  onClick?: (event: MouseEvent<HTMLElement>, id?: string) => void;
  hasAdditionalResources?: boolean;
  showAdditionalResources?: boolean;
  listDirection?: ListDirection;
  invertedStyle?: boolean;
  onToggleAdditionalResources?: (checked: boolean) => void;
};

export const NavigationBox = ({
  heading,
  colorMode = 'primary',
  items,
  isButtonElements,
  onClick,
  hasAdditionalResources,
  showAdditionalResources = false,
  listDirection = 'horizontal',
  invertedStyle,
  onToggleAdditionalResources = () => {},
}: Props) => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <StyledHeadingWrapper>
        {heading && (
          <StyledHeading element="h2" margin="small" headingStyle="list-title" data-inverted={invertedStyle}>
            {heading}
          </StyledHeading>
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
      <StyledList data-testid="nav-box-list" data-direction={listDirection}>
        {items?.map((item: ItemProps) => (
          <BoxItem
            item={item}
            key={item.id}
            isButtonElements={isButtonElements}
            colorMode={colorMode}
            onClick={onClick}
            listDirection={listDirection}
          />
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

interface BoxItemProps {
  item: ItemProps;
  colorMode: ColorMode;
  onClick?: (event: MouseEvent<HTMLElement>, id?: string) => void;
  listDirection: ListDirection;
  isButtonElements?: boolean;
}

const BoxItem = memo(({ item, colorMode, isButtonElements, onClick, listDirection }: BoxItemProps) => {
  const ListElementType = useMemo(() => (isButtonElements ? ButtonV2 : SafeLinkButton), [isButtonElements]);

  const onElementClick = useCallback((e: MouseEvent<HTMLElement>) => onClick?.(e, item.id), [item.id, onClick]);

  return (
    <StyledListItem key={item.label} data-direction={listDirection} data-testid="nav-box-item">
      <StyledListElementWrapper
        data-additional={item.isAdditionalResource}
        data-lighter={colorMode === 'light'}
        data-selected={item.selected}
      >
        <ListElementType
          to={item.url ?? ''}
          colorTheme={item.selected ? 'darker' : colorMode}
          size="medium"
          shape="sharp"
          css={listElementStyle}
          onClick={onElementClick}
        >
          <StyledButtonContent>
            <StyledButtonContentText
              data-additional={item.isAdditionalResource}
              data-restricted={item.isRestrictedResource}
            >
              <StyledMarksWrapper>
                {item.isAdditionalResource && (
                  <StyledAdditionalResourceMark data-lighter={colorMode === 'light'} data-selected={item.selected}>
                    T
                  </StyledAdditionalResourceMark>
                )}
                {item.isRestrictedResource && (
                  <StyledHumanBoardIconWrapper>
                    <HumanMaleBoard />
                  </StyledHumanBoardIconWrapper>
                )}
              </StyledMarksWrapper>
              {item.label}
            </StyledButtonContentText>
            {item.selected && <StyledButtonContentSelected />}
          </StyledButtonContent>
        </ListElementType>
      </StyledListElementWrapper>
      {listDirection !== 'floating' && <StyledSpacingElement />}
    </StyledListItem>
  );
});

export default NavigationBox;
