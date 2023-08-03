/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLProps, ReactNode } from 'react';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { Check } from '@ndla/icons/editor';
import { Information } from '@ndla/icons/common';
import DropdownMenuImage from './DropdownMenuImage';

const StyledDescription = styled.span`
  ${fonts.sizes(14, 1.1)};
  font-weight: ${fonts.weight.normal};
  padding-top: ${spacing.xsmall};
  color: ${colors.text.light};
  text-align: left;
`;

const StyledTitle = styled.span`
  ${fonts.sizes(18, 1.1)};
  font-weight: ${fonts.weight.semibold};
  color: ${colors.text.primary};
  text-align: left;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: ${spacing.small};
  flex-grow: 3;
`;

const StyledisSelected = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: flex-end;
  padding-right: ${spacing.small};
  .c-icon {
    color: ${colors.support.green};
    margin-left: ${spacing.xsmall};
  }
  display: flex;
  flex-direction: row;
  ${fonts.sizes(14, 1.1)};
  font-weight: ${fonts.weight.normal};
  color: ${colors.text.light};
  text-transform: uppercase;
`;

const StyledIsDisabled = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 2;
  justify-content: flex-end;
  align-items: flex-start;
  padding-right: ${spacing.small};
  .c-icon {
    width: 17px;
    height: 17px;
    min-width: 17px;
    min-height: 17px;
    margin-left: ${spacing.xsmall};
  }
  ${fonts.sizes(14, 1.1)};
  font-weight: ${fonts.weight.normal};
  color: ${colors.text.light};
  text-transform: uppercase;
`;

interface StyledItemButtonProps {
  highlighted?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
}
const StyledItemButton = styled.button<StyledItemButtonProps>`
  border: 0;
  border-bottom: 1px solid ${colors.brand.greyLightest};
  padding: ${spacing.small};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  transition: background 200ms ease;
  background: transparent;
  &:focus,
  &:hover {
    background: ${colors.brand.lighter};
  }
  ${(props) =>
    props.highlighted &&
    css`
      background: ${colors.brand.lighter};
    `}
  ${(props) =>
    props.isSelected &&
    css`
      background: ${colors.brand.greyLightest};
      ${StyledTitle} {
        color: ${colors.text.light};
      }
    `}
  ${(props) =>
    props.disabled &&
    css`
        disabled;
        background: ${colors.brand.greyLightest};
        ${StyledTitle} {
          color: ${colors.text.light};
        }
      `}
`;

interface InfoPartProps {
  isSelected?: boolean;
  disabledText?: string;
}

const InfoPart = ({ isSelected, disabledText }: InfoPartProps) => {
  const { t } = useTranslation();
  if (isSelected) {
    return (
      <StyledisSelected>
        {t('dropdown.isSelectedItem')}
        <Check aria-hidden={true} />
      </StyledisSelected>
    );
  } else if (disabledText) {
    return (
      <StyledIsDisabled>
        {disabledText}
        <Information aria-hidden={true} />
      </StyledIsDisabled>
    );
  }
  return null;
};

interface ItemType {
  id: string | number;
  disabledText?: string;
  image?: string | ReactNode;
  alt?: string;
  description?: string;
  title: string;
}

interface DropdownMenuItemProps extends HTMLProps<HTMLButtonElement> {
  disableSelected?: boolean;
  isSelected?: boolean;
  highlighted?: boolean;
  item: ItemType;
}

function DropdownMenuItem({ disableSelected, item, isSelected, highlighted, ...rest }: DropdownMenuItemProps) {
  return (
    <StyledItemButton
      key={item.id}
      //@ts-ignore Emotion uses string instead of union for type prop
      type={'button'}
      isSelected={isSelected}
      disabled={!!item.disabledText || (disableSelected && isSelected)}
      highlighted={highlighted}
      {...rest}
    >
      {<DropdownMenuImage image={item.image} alt={item.alt} />}
      <StyledText>
        <StyledTitle>{item.title}</StyledTitle>
        {item.description && <StyledDescription>{item.description}</StyledDescription>}
      </StyledText>
      <InfoPart disabledText={item.disabledText} isSelected={isSelected} />
    </StyledItemButton>
  );
}

export default DropdownMenuItem;
