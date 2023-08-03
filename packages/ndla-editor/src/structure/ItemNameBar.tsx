/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLProps, ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { spacing, colors, fonts } from '@ndla/core';
import { Star } from '@ndla/icons/editor';
import { RenderBeforeFunction } from './Structure';

const itemTitleArrow = css`
  &:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 9px solid ${colors.text.primary};
    margin-right: ${spacing.xsmall};
  }
`;

const itemTitleLinked = css`
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-bottom: 2px solid ${colors.brand.light};
    border-left: 2px solid ${colors.brand.light};
    border-bottom-left-radius: 2px;
    margin-right: ${spacing.xsmall};
    margin-left: 7px;
  }
`;

interface ItemTitleButtonProps {
  isVisible?: boolean;
  hasSubtopics?: boolean;
  lastItemClickable?: boolean;
  isSubject?: boolean;
  arrowDirection?: number;
}

const ItemTitleButton = styled.button<ItemTitleButtonProps>`
  ${fonts.sizes(16, 1)};
  font-weight: ${fonts.weight.semibold};
  border: 0;
  background: 0;
  color: ${(props) => (!props.isVisible ? colors.brand.grey : colors.brand.primary)};
  display: flex;
  align-items: center;
  text-align: left;
  white-space: nowrap;
  font-style: ${(props) => !props.isVisible && 'italic'};

  ${(props) => props.hasSubtopics && itemTitleArrow};
  ${(props) =>
    props.lastItemClickable &&
    css`
      cursor: pointer;
    `};
  ${(props) => !props.hasSubtopics && !props.isSubject && itemTitleLinked};

  &:before {
    transition: transform 200ms ease;
    transform: rotate(${(props) => props.hasSubtopics && props.arrowDirection}deg);
  }
`;

const StyledIcon = styled.button`
  display: flex;
  align-items: center;

  border: 0;
  background: transparent;

  svg:hover {
    fill: ${colors.favoriteColor};
    cursor: pointer;
  }
`;

interface StyledItemBarProps {
  level?: number;
  highlight?: boolean;
}

const StyledItemBar = styled.div<StyledItemBarProps>`
  display: flex;
  justify-content: space-between;
  padding: 0 ${spacing.small} 0 calc(${(props) => props.level} * 17px + ${spacing.small});
  height: 40px;
  border-bottom: 1px solid ${colors.brand.greyLighter};
  background: ${(props) => props.highlight && colors.brand.light};

  &:hover {
    background: ${(props) => (props.highlight ? colors.brand.light : '#f1f5f8')};
  }
`;

const ItemTitleSpan = ItemTitleButton.withComponent('span');

interface Props {
  title: string;
  children?: ReactNode;
  path: string;
  toggleOpen: Function;
  hasSubtopics: boolean;
  isOpen?: boolean;
  lastItemClickable?: boolean;
  id: string;
  isSubject: boolean;
  isVisible?: boolean;
  favoriteSubjectIds?: string[];
  toggleFavorite: Function;
  highlight?: boolean;
  level?: number;
  renderBeforeTitle?: RenderBeforeFunction;
  contentUri?: string;
  taxonomyId: string;
}

const ItemNameBar = ({
  title,
  children,
  path,
  toggleOpen,
  hasSubtopics,
  highlight,
  isOpen,
  isSubject,
  lastItemClickable,
  id,
  level = 0,
  isVisible,
  favoriteSubjectIds,
  toggleFavorite,
  renderBeforeTitle,
  contentUri,
  taxonomyId,
}: Props) => (
  <StyledItemBar level={level} highlight={highlight}>
    {favoriteSubjectIds && (
      <RoundIcon
        onClick={() => toggleFavorite()}
        smallIcon={
          favoriteSubjectIds.includes(id) ? (
            <Star color={colors.favoriteColor} />
          ) : (
            <Star color={colors.brand.greyDark} />
          )
        }
      />
    )}
    {lastItemClickable || hasSubtopics ? (
      <ItemTitleButton
        type="button"
        id={id}
        hasSubtopics={hasSubtopics}
        isSubject={isSubject}
        lastItemClickable={lastItemClickable}
        arrowDirection={isOpen ? 90 : 0}
        onClick={() => toggleOpen(path)}
        isVisible={isVisible}
      >
        {renderBeforeTitle?.({ id: taxonomyId, title, contentUri, isSubject })}
        {title}
      </ItemTitleButton>
    ) : (
      <ItemTitleSpan isVisible={isVisible}>
        {renderBeforeTitle?.({ id: taxonomyId, title, contentUri, isSubject })}
        {title}
      </ItemTitleSpan>
    )}
    {children}
  </StyledItemBar>
);

interface RoundIconProps {
  smallIcon: ReactNode;
  clicked?: boolean;
  type?: 'button' | 'reset' | 'submit';
}

const RoundIcon = ({ smallIcon, ...rest }: RoundIconProps & Omit<HTMLProps<HTMLButtonElement>, 'as'>) => (
  <StyledIcon {...rest}>{smallIcon}</StyledIcon>
);

export default ItemNameBar;
