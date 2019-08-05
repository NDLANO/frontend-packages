/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import { LearningPathRead } from '@ndla/icons/contentType';

import { colors } from '@ndla/core';

type IconProps = {
  beforeCurrent?: boolean;
  current?: boolean;
}
const Icon = styled.div<IconProps>`
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: ${colors.brand.primary};
  color: ${colors.text.light};
  transform: translateX(4px);
  svg {
    width: 18px;
    height: 18px;
    fill: ${props => props.current ? '#fff' : colors.brand.tertiary};
  }
`;

interface Props {
  type: string;
  beforeCurrent?: boolean;
  current?: boolean;
}

export const LearningPathIcon: React.FunctionComponent<Props> = ({
  type,
  beforeCurrent,
  current,
}) => (
  <Icon current={current} beforeCurrent={beforeCurrent}>
    {(type === 'HAS_READ' || type === 'CURRENT') && <LearningPathRead />}
  </Icon>
);