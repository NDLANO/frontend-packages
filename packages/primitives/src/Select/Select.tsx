/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  Root,
  Trigger,
  Content,
  ScrollUpButton,
  ScrollDownButton,
  Value,
  Icon,
  Portal,
  Viewport,
  Group,
  Label,
} from '@radix-ui/react-select';
import React, { forwardRef } from 'react';
import { ChevronDown, ChevronUp } from '@ndla/icons/common';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { css, SerializedStyles } from '@emotion/react';
import SelectItem from './SelectItem';

const StyledTrigger = styled(Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 0 ${spacing.small};
  ${fonts.sizes(16)}
  line-height: 1;
  height: 35px;
  gap: ${spacing.xxsmall};
  background-color: ${colors.brand.lighter};
  font-family: ${fonts.sans};
  border: 0px !important;
  outline: 0px !important;
`;

const StyledContent = styled(Content)`
  overflow: hidden;
  background-color: ${colors.white};
  border-radius: 4px;
  border: 1px solid ${colors.brand.greyLight};
`;

const StyledChevron = styled(ChevronDown)`
  margin-left: auto;
  width: 24px;
  height: 24px;
`;

const StyledViewport = styled(Viewport)`
  padding: ${spacing.xsmall};
`;

const StyledPrefix = styled.span`
  font-weight: ${fonts.weight.bold};
`;

const scrollButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: ${colors.white};
  cursor: default;
`;
const StyledScrollUpButton = styled(ScrollUpButton)`
  ${scrollButton}
`;
const StyledScrollDownButton = styled(ScrollDownButton)`
  ${scrollButton}
`;

interface Props {
  selectElements: string[];
  label?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  prefix?: string;
  triggerCSS?: SerializedStyles;
  iconCSS?: SerializedStyles;
  triggerTextCSS?: SerializedStyles;
  itemCSS?: SerializedStyles;
}
const Select = forwardRef<HTMLButtonElement, Props>(
  (
    {
      selectElements,
      label,
      defaultValue,
      value,
      onValueChange,
      placeholder,
      prefix,
      triggerCSS,
      iconCSS,
      triggerTextCSS,
      itemCSS,
      ...rest
    },
    ref,
  ) => {
    return (
      <Root onValueChange={onValueChange} value={value} {...(defaultValue ? { defaultValue: defaultValue } : {})}>
        <StyledTrigger aria-label={label} css={triggerCSS} ref={ref} {...rest}>
          <span css={triggerTextCSS}>
            {value && prefix ? (
              <Value placeholder>
                <StyledPrefix>{`${prefix}`}</StyledPrefix>
                <span>{`: ${value}`}</span>
              </Value>
            ) : (
              <Value placeholder={placeholder} />
            )}
          </span>
          <Icon>
            <StyledChevron css={iconCSS} />
          </Icon>
        </StyledTrigger>
        <Portal>
          <StyledContent>
            <StyledScrollUpButton>
              <ChevronUp />
            </StyledScrollUpButton>
            <StyledViewport>
              <Group>
                {selectElements.map((element, index) => (
                  <SelectItem key={`${element}_${index}}`} value={element} itemCSS={itemCSS}>
                    {element}
                  </SelectItem>
                ))}
              </Group>
            </StyledViewport>
            <StyledScrollDownButton>
              <ChevronDown />
            </StyledScrollDownButton>
          </StyledContent>
        </Portal>
      </Root>
    );
  },
);

export default Select;
