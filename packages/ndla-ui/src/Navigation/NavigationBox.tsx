import { MouseEvent } from 'react';
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

type listProps = {
  direction?: 'horizontal' | 'vertical' | 'floating';
};
const StyledList = styled.ul<listProps>`
  list-style: none;
  margin: 0;
  padding: 0;
  ${(props) =>
    props.direction !== 'floating' &&
    css`
      ${mq.range({ from: breakpoints.tablet })} {
        column-count: 2;
        column-gap: 20px;
        ${props.direction === 'horizontal' &&
        css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        `}
      }
      ${mq.range({ from: breakpoints.tabletWide })} {
        column-count: 3;
        column-gap: 20px;
        ${props.direction === 'horizontal' &&
        css`
          grid-template-columns: repeat(3, 1fr);
        `}
      }
    `};
`;
type additionalResourceProps = {
  isAdditionalResource?: boolean;
  isRestrictedResource?: boolean;
  lighter?: boolean;
  selected?: boolean;
  listDirection?: listProps['direction'];
};

const StyledListItem = styled.li<additionalResourceProps>`
  margin-bottom: 0;
  break-inside: avoid;
  ${(props) =>
    props.listDirection === 'floating' &&
    css`
      display: inline-block;
      margin: 0 ${spacing.xsmall} ${spacing.xsmall} 0;
      ${mq.range({ until: breakpoints.mobileWide })} {
        display: block;
      }
    `}
`;

const StyledListElementWrapper = styled.div<additionalResourceProps>`
  position: relative;
  ${(props) =>
    props.isAdditionalResource &&
    css`
      & > * {
        border: 1px dashed ${props.lighter && !props.selected ? `${colors.brand.tertiary}` : `${colors.brand.dark}`};
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

const StyledButtonContentText = styled.span<additionalResourceProps>`
  ${(props) => {
    if (props.isAdditionalResource && props.isRestrictedResource) {
      return `padding-left: ${spacing.medium};`;
    }
    if (props.isAdditionalResource || props.isRestrictedResource) {
      return `padding-left: ${spacing.small};`;
    }
  }}
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
const StyledAdditionalResourceMark = styled.span<additionalResourceProps>`
  color: ${(props) => (props.lighter && !props.selected ? `${colors.brand.dark}` : `${colors.white}`)};
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid ${(props) => (props.lighter && !props.selected ? `${colors.brand.dark}` : `${colors.white}`)};
  border-radius: 100px;
  transition: ${misc.transition.default};
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
type Props = {
  heading?: string;
  colorMode?: 'primary' | 'darker' | 'light' | 'greyLightest' | 'greyLighter';
  isButtonElements?: boolean;
  items?: ItemProps[];
  onClick?: (event: MouseEvent<HTMLElement>, id?: string) => void;
  hasAdditionalResources?: boolean;
  showAdditionalResources?: boolean;
  listDirection?: listProps['direction'];
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
  const ListElementType = isButtonElements ? ButtonV2 : SafeLinkButton;
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
      <StyledList data-testid="nav-box-list" direction={listDirection}>
        {items?.map((item: ItemProps) => (
          <StyledListItem key={item.label} listDirection={listDirection} data-testid="nav-box-item">
            <StyledListElementWrapper
              isAdditionalResource={item.isAdditionalResource}
              lighter={colorMode === 'light'}
              selected={item.selected}
            >
              <ListElementType
                to={item.url ?? ''}
                colorTheme={item.selected ? 'darker' : colorMode}
                size="medium"
                shape="sharp"
                css={listElementStyle}
                onClick={(e: MouseEvent<HTMLElement>) => {
                  if (onClick) {
                    onClick(e, item.id);
                  }
                }}
              >
                <StyledButtonContent>
                  <StyledButtonContentText
                    isAdditionalResource={item.isAdditionalResource}
                    isRestrictedResource={item.isRestrictedResource}
                    lighter={colorMode === 'light'}
                  >
                    <StyledMarksWrapper>
                      {item.isAdditionalResource && (
                        <StyledAdditionalResourceMark lighter={colorMode === 'light'} selected={item.selected}>
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
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

export default NavigationBox;
