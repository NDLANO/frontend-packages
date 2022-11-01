/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import { TreeStructureExampleComponent, NAVIGATION_STRUCTURE } from '../TreeStructureExample';
//@ts-ignore
import { LayoutWithSidebarAside, LayoutWithSidebarMain, LayoutWithSidebarWrapper } from '../../helpers';

export const MyPage = ({ children }: { children: ReactNode }) => (
  <LayoutWithSidebarWrapper>
    <LayoutWithSidebarAside>
      <TreeStructureExampleComponent type="navigation" openOnFolderClick structure={NAVIGATION_STRUCTURE} />
    </LayoutWithSidebarAside>
    <LayoutWithSidebarMain>{children}</LayoutWithSidebarMain>
  </LayoutWithSidebarWrapper>
);

export default MyPage;
