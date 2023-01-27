/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Root, Thumb, SwitchProps } from '@radix-ui/react-switch';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';

interface Props extends Omit<SwitchProps, 'asChild' | 'id' | 'onChange' | 'onCheckedChange'> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  id: string | number;
  thumbCharacter?: string;
}

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.brand.primary};
  gap: ${spacing.small};
  cursor: pointer;
  label {
    cursor: pointer;
  }
`;
const StyledThumb = styled(Thumb)`
  display: block;
  width: 16px;
  height: 16px;
  background-color: ${colors.white};
  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(22px);
  }
`;
const StyledRoot = styled(Root)`
  all: unset;
  width: 40px;
  height: 20px;
  border-radius: 9999px;
  position: relative;

  &[data-state='checked'] {
    background-color: ${colors.brand.primary};
  }
  &[data-state='unchecked'] {
    background-color: ${colors.text.light};
  }
  &:hover,
  &:focus,
  &:focus-within {
    &[data-state='checked'] {
      background-color: ${colors.brand.dark};
    }
    &[data-state='unchecked'] {
      background-color: ${colors.brand.greyDark};
    }
  }
`;

const StyledThumbChar = styled.div`
  text-align: center;
  color: ${colors.black};
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes('14px', '16px')};
  user-select: none;
`;

const SwitchV2 = ({ onChange, label, id, className, thumbCharacter, ...rest }: Props) => {
  return (
    <SwitchWrapper className={className}>
      <label htmlFor={`switch-${id}`}>{label}</label>
      <StyledRoot id={`switch-${id}`} onCheckedChange={onChange} {...rest}>
        <StyledThumb>{thumbCharacter && <StyledThumbChar>{thumbCharacter}</StyledThumbChar>}</StyledThumb>
      </StyledRoot>
    </SwitchWrapper>
  );
};

export default SwitchV2;
