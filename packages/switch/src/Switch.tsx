/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';

const StyledSwitch = styled.div`
  color: ${colors.brand.primary};
  margin: ${spacing.normal};
  ${fonts.sizes(14, 1.1)};
`;

type Props = {
  checked: boolean;
  label: string;
  name: string;
  disabled?: boolean;
  onChange: void;
}

const Switch: React.FunctionComponent<Props & React.HTMLProps<HTMLElement>> = ({
  onChange, checked, disabled, name, label,
}) => (
  <StyledSwitch>
    <input onChange={onChange} name={name} type="checkbox" checked={checked} disabled={disabled} />
    <label htmlFor={name}>{label}</label>
  </StyledSwitch>
);

export default Switch;