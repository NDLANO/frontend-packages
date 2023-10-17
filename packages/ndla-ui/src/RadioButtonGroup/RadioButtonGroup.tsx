/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useMemo } from 'react';
import styled from '@emotion/styled';
import { uuid as uuidFunc } from '@ndla/util';
import { Text } from '@ndla/typography';
import { spacing, fonts, colors, misc } from '@ndla/core';
import { Indicator, Item, RadioGroupItemProps, RadioGroupProps, Root } from '@radix-ui/react-radio-group';

interface Props {
  selected?: string;
  className?: string;
  options: {
    title: string;
    value: string;
    disabled?: boolean;
  }[];
  direction?: 'horizontal' | 'vertical';
  label?: string;
  uniqeIds?: boolean;
  onChange: (value: string) => void;
}

const GroupLabel = styled(Text)`
  font-family: ${fonts.sans};
  font-weight: ${fonts.weight.semibold};
`;

const RadioButtonGroupLabel = styled(Text)`
  color: ${colors.brand.primary};
  font-family: ${fonts.sans};
  &[data-disabled='true'] {
    color: ${colors.brand.light};
  }
`;

const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px ${spacing.small};
  gap: ${spacing.small};
  &:focus-within {
    outline: 2px solid ${colors.brand.primary};
    border-radius: ${misc.borderRadius};
  }
`;

export const StyledRadioGroupItem = styled(Item)`
  all: unset;
  transition: 200ms all ease;
  box-shadow: 0 0 0 2px ${colors.brand.light};
  min-width: ${spacing.nsmall};
  min-height: ${spacing.nsmall};
  width: ${spacing.nsmall};
  height: ${spacing.nsmall};
  border-radius: 100%;
  &[data-state='checked'] {
    box-shadow: 0 0 0 2px ${colors.brand.primary};
  }
`;

const RadioButtonIndicator = styled(Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    display: block;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    background-color: ${colors.brand.light};
    transition: 200ms all ease;
  }
  &:hover,
  &:focus-visible,
  &[data-state='checked'] {
    &::after {
      width: ${spacing.small};
      height: ${spacing.small};
    }
  }
  &[data-disabled] {
    &::after {
      width: 0px;
      height: 0px;
    }
  }

  &[data-state='checked'] {
    &::after {
      background-color: ${colors.brand.primary};
    }
  }
`;

export const StyledRadioButtonGroupRoot = styled(Root)`
  padding: ${spacing.small} 0;
  gap: ${spacing.small};
  display: flex;
  font-family: ${fonts.sans};
  align-items: center;
  &[data-direction='vertical'] {
    flex-direction: column;
    align-items: unset;
  }
`;

interface ItemProps extends RadioGroupItemProps {}

export const RadioGroupItem = ({ value, disabled, id, title, className }: ItemProps) => {
  return (
    <RadioButtonWrapper key={value} className={className}>
      <StyledRadioGroupItem disabled={disabled} value={value} id={id}>
        <RadioButtonIndicator forceMount />
      </StyledRadioGroupItem>
      <RadioButtonGroupLabel element="label" textStyle="content" margin="none" htmlFor={id} data-disabled={disabled}>
        {title}
      </RadioButtonGroupLabel>
    </RadioButtonWrapper>
  );
};

interface RootProps extends RadioGroupProps {
  direction?: 'horizontal' | 'vertical';
}

export const RadioButtonGroupRoot = ({ children, direction, ...rest }: RootProps) => {
  return (
    <StyledRadioButtonGroupRoot data-direction={direction} {...rest}>
      {children}
    </StyledRadioButtonGroupRoot>
  );
};

const RadioButtonGroup = ({
  selected,
  options,
  label,
  uniqeIds,
  onChange,
  direction = 'horizontal',
  className,
}: Props) => {
  const uuid = useMemo(() => (uniqeIds ? uuidFunc() : undefined), [uniqeIds]);

  return (
    <RadioButtonGroupRoot
      data-direction={direction}
      value={selected}
      defaultValue={selected ?? options[0].value}
      className={className}
      onValueChange={onChange}
    >
      {label && (
        <GroupLabel element="span" textStyle="content">
          {label}
        </GroupLabel>
      )}
      {options.map((option) => {
        const id = uuid ? `${uuid}_${option.value}` : option.value;
        return (
          <RadioGroupItem
            key={option.value}
            disabled={option.disabled}
            value={option.value}
            id={id}
            title={option.title}
          />
        );
      })}
    </RadioButtonGroupRoot>
  );
};

export default RadioButtonGroup;
