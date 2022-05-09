/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React from 'react';
const ResourceElementWrapper = styled.div`
  width: 960px;
  height: 56px;
`;

export type ResourceProps = {
  type: 'folder' | 'resource';
  title: string;
  tags?: string[];
  subFolders?: typeof ResourceElement[];
  subResources?: typeof ResourceElement[];
};

export const ResourceElement = () => {
  <ResourceElementWrapper></ResourceElementWrapper>;
};

export default ResourceElement;
