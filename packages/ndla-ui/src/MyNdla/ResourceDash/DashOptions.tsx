/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import styled from '@emotion/styled';
import React, { ReactElement } from 'react';

const DashOptionWrapper = styled.div`
  height: 56px;
  border: 1px solid black;
`;

export type DashProps = {};
const DashOptions = ({}: DashProps) => {
  return <DashOptionWrapper></DashOptionWrapper>;
};

export default DashOptions;
