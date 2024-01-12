/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonV2 } from "@ndla/button";
import { breakpoints, colors, misc, mq, spacing } from "@ndla/core";
import { Additional, HumanMaleBoard } from "@ndla/icons/common";
import { SafeLinkButton } from "@ndla/safelink";
import { Switch } from "@ndla/switch";
import { Heading } from "@ndla/typography";
import { uuid } from "@ndla/util";

const StyledWrapper = styled.nav`
  margin: ${spacing.normal} 0 ${spacing.mediumlarge};
`;

const StyledHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const StyledHeading = styled(Heading)`
  &[data-inverted="true"] {
    color: ${colors.white};
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xxsmall};

  &[data-direction="horizontal"] {
    ${mq.range({ from: breakpoints.tablet })} {
      column-count: 2;
      gap: 20px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    ${mq.range({ from: breakpoints.tabletWide })} {
      column-count: 3;
      gap: 20px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const StyledListItem = styled.li`
  padding: 0;
  break-inside: avoid;

  &[data-direction="floating"] {
    display: inline-block;
    margin: 0 ${spacing.xsmall} ${spacing.xsmall} 0;
    ${mq.range({ until: breakpoints.mobileWide })} {
      display: block;
    }
  }
`;

const StyledButtonContent = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const StyledButtonContentText = styled.span`
  &[data-additional="true"][data-restricted="true"] {
    padding-left: ${spacing.medium};
  }
  &[data-additional="true"] {
    padding-left: ${spacing.small};
  }
  &[data-restricted="true"] {
    padding-left: ${spacing.small};
  }
`;

const StyledMarksWrapper = styled.span`
  position: absolute;
  left: ${spacing.xxsmall};
  top: ${spacing.xsmall};
  display: flex;
  align-items: center;
  & > * {
    margin-left: ${spacing.xxsmall};
  }
  span:first-of-type {
    margin-left: 0;
  }
`;

const StyledAdditional = styled(Additional)`
  fill: ${colors.white};
  width: ${spacing.nsmall};
  height: ${spacing.nsmall};
`;

const StyledHumanBoardIconWrapper = styled.span`
  display: flex;
`;

const StyledButtonContentSelected = styled.span`
  width: 10px;
  height: 10px;
  border-radius: ${misc.borderRadiusLarge};
  background: ${colors.white};
  flex-shrink: 0;
  margin-left: ${spacing.small};
`;

const StyledListElementWrapper = styled.div`
  position: relative;
  &[data-additional="true"] {
    & > * {
      border: 1px dashed ${colors.brand.dark};
      background-clip: padding-box;
      :hover,
      :focus {
        border: 1px dashed ${colors.brand.dark};
        background-clip: padding-box;
        color: ${colors.white};
      }
      &[data-color-mode="light"][data-selected="false"] {
        border: 1px dashed ${colors.brand.tertiary};
      }
    }
  }
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
  colorMode?: "primary" | "darker" | "light" | "greyLightest" | "greyLighter";
  isButtonElements?: boolean;
  items?: ItemProps[];
  onClick?: (event: MouseEvent<HTMLElement>, id?: string) => void;
  hasAdditionalResources?: boolean;
  showAdditionalResources?: boolean;
  listDirection?: "horizontal" | "floating";
  invertedStyle?: boolean;
  onToggleAdditionalResources?: (checked: boolean) => void;
};

export const NavigationBox = ({
  heading,
  colorMode = "primary",
  items,
  isButtonElements,
  onClick,
  hasAdditionalResources,
  showAdditionalResources = false,
  listDirection = "horizontal",
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
            label={t("navigation.additionalTopics")}
            onChange={onToggleAdditionalResources}
            css={invertedStyle ? { color: "#fff" } : {}}
          />
        )}
      </StyledHeadingWrapper>
      <StyledList data-testid="nav-box-list" data-direction={listDirection}>
        {items?.map((item: ItemProps) => (
          <StyledListItem key={item.label} data-direction={listDirection} data-testid="nav-box-item">
            <StyledListElementWrapper
              data-additional={item.isAdditionalResource}
              data-color-mode={colorMode}
              data-selected={item.selected}
            >
              <ListElementType
                to={item.url ?? ""}
                colorTheme={item.selected ? "darker" : colorMode}
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
                    data-additional={item.isAdditionalResource}
                    data-restricted={item.isRestrictedResource}
                    data-color-mode={colorMode}
                  >
                    <StyledMarksWrapper>
                      {item.isAdditionalResource && (
                        <StyledAdditional aria-label={t("resource.additionalTooltip")} ariaHidden={false} />
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
          </StyledListItem>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

export default NavigationBox;
