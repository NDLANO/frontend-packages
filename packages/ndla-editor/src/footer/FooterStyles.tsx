/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { spacing, typography, colors, fonts, misc } from '@ndla/core';

type StyledWrapperProp = {
  extended: boolean;
};

export const StyledWrapper = styled.section<StyledWrapperProp>`
  padding-bottom: ${spacing.normal};
  margin-top: -${spacing.small};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${props =>
    props.extended &&
    css`
      min-width: 500px;
      padding: 0 ${spacing.medium} ${spacing.large} ${spacing.medium};
    `}
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`;

export const StyledListItem = styled.li`
  padding: 0;
  margin: 0;
`;

const checkItemStyle = css`
  white-space: nowrap;
  display: flex;
  width: 100%;
  align-items: center;
  color: ${colors.text.primary};
  ${fonts.sizes('18px', '22px')};
  font-weight: ${fonts.weight.semibold};
  svg {
    width: ${spacing.normal};
    height: ${spacing.normal};
    fill: ${colors.support.green};
    margin-right: ${spacing.xsmall};
  }
`;

export const StyledSelectedItemSpan = styled.div`
  ${checkItemStyle}
`;

export const StyledButton = styled.button`
  background: transparent;
  border: 0;
  padding: ${spacing.xsmall} ${spacing.large} ${spacing.xsmall}
    ${spacing.normal};
  ${checkItemStyle}
  &:disabled {
    color: ${colors.text.light};
  }
  &:not(:disabled) {
    cursor: pointer;
    svg {
      opacity: 0;
    }
    &:hover {
      background: ${colors.brand.greyLighter};
      svg {
        opacity: 0.5;
      }
    }
  }
`;

export const StyledButtonWrapper = styled.div`
  margin: ${spacing.normal} 0 0 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledInputWrapper = styled.div`
  width: 100%;
`;

export const StyledBackButton = styled.button`
  display: flex;
  align-items: center;
  color: ${colors.brand.primary};
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0 0 ${spacing.medium} 0;
  cursor: pointer;
  svg {
    margin-right: ${spacing.xsmall};
    width: ${spacing.normal};
    height: ${spacing.normal};
    cursor: pointer;
    transition: transform 200ms ease;
  }
  &:hover,
  &:focus {
    span {
      cursor: pointer;
      text-decoration: underline;
    }
    svg {
      transform: translateX(-${spacing.xsmall});
    }
  }
`;

export const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  min-width: 200px;
  font-weight: ${fonts.weight.semibold};
  color: ${colors.brand.primary};
  border: 0;
  ${fonts.sizes(18, 1.25)};
  padding: ${spacing.small} ${spacing.small} ${spacing.small}
    ${spacing.spacingUnit * 0.75}px;
  margin-right: ${spacing.normal};
  border-radius: ${misc.borderRadius};
  transition: background-color 200ms ease;
  background: ${colors.brand.lighter};
  svg {
    margin-left: ${spacing.normal};
    width: ${spacing.normal};
    height: ${spacing.normal};
  }
  &:hover,
  &:focus {
    background-color: ${colors.brand.light};
    transform: translate(1px, 1px);
  }
`;

export const changeStatusStyle = css`
  ${typography.smallerHeadingUppercase};
  margin: ${spacing.xsmall} ${spacing.large} ${spacing.small} ${spacing.medium};
`;
