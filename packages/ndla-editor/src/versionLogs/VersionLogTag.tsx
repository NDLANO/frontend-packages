/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, spacing, fonts, misc } from '@ndla/core';

type StyledTagProps = {
  color: 'yellow' | 'green' | 'red';
};

const StyledTag = styled.span<StyledTagProps>`
  display: flex;
  background: ${(props) => colors.support[props.color]};
  ${fonts.sizes(16, 1.1)};
  font-weight: ${fonts.weight.semibold};
  color: #000;
  padding: ${spacing.xxsmall} ${spacing.small};
  border-radius: ${misc.borderRadius};
  margin-left: ${spacing.small};
`;

interface Props extends StyledTagProps {
  label: string;
}

const VersionLogTag = ({ label, color }: Props) => <StyledTag color={color}>{label}</StyledTag>;

export default VersionLogTag;
