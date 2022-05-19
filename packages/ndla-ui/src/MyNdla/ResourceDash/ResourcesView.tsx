/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { css } from '@emotion/core';
import ResourceElement from './ResourceElement';
import FolderElement from './FolderElement';
import DashOptions from './DashOptions';
const ResourcesWrapper = styled.div<{ layout: LayoutProps }>`
  ${(props) =>
    props.layout === 'block' &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    `}
`;

export interface ViewProps {
  children?: ReactElement[];
  layout: LayoutProps;
}
type LayoutProps = 'list' | 'listLarger' | 'block';

export const ResourcesView = ({ layout, children }: ViewProps) => {
  return (
    <>
      <DashOptions></DashOptions>
      <ResourcesWrapper layout={layout}>{children}</ResourcesWrapper>
    </>
  );
};

export default ResourcesView;
