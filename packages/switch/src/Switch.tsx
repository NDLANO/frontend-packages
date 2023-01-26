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
  position: absolute;
  transform: translate(0px, -50%);
  width: 23px;
  height: 23px;
  background-color: ${colors.brand.greyMedium};
  border-radius: 100%;
  transition: transform 100ms;
  will-change: transform;

  &[data-state='unchecked'] {
    &:hover,
    &:focus,
    &:focus-within {
      background-color: ${colors.brand.grey};
    }
  }

  &[data-state='checked'] {
    transform: translate(19px, -50%);
    background-color: ${colors.brand.primary};
  }
`;

const StyledTrack = styled.div`
  position: absolute;
  transform: translateY(-50%);
  width: 39px;
  height: 18px;
  margin-left: 2px;
  margin-right: 2px;
  background-color: ${colors.brand.greyLight};
  border-radius: ${spacing.normal};
`;

const StyledRoot = styled(Root)`
  all: unset;
  display: block;
  position: relative;
  width: 42px;
  height: 25px;
  &[data-state='checked'] {
    ${StyledTrack} {
      background-color: ${colors.brand.light};
    }
    &:hover,
    &:focus,
    &:focus-within {
      ${StyledTrack} {
        background-color: ${colors.brand.tertiary};
      }
    }
  }
`;

const StyledThumbChar = styled.div`
  text-align: center;
  color: ${colors.white};
  font-weight: 600;
  ${fonts.sizes('14px', '23px')}
`;

const SwitchV2 = ({ onChange, label, id, className, thumbCharacter, ...rest }: Props) => {
  return (
    <SwitchWrapper className={className}>
      <label htmlFor={`switch-${id}`}>{label}</label>
      <StyledRoot id={`switch-${id}`} onCheckedChange={onChange} {...rest}>
        <StyledTrack />
        <StyledThumb>{thumbCharacter && <StyledThumbChar>{thumbCharacter}</StyledThumbChar>}</StyledThumb>
      </StyledRoot>
    </SwitchWrapper>
  );
};

export default SwitchV2;
