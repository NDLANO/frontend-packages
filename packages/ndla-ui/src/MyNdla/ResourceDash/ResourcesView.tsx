/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React from 'react';
import ResourceElement from './ResourceElement';

const ResourcesWrapper = styled.div``;

export const ResourcesView = () => {
  return (
    <ResourcesWrapper>
      <ResourceElement type="folder" title="folder" />;
    </ResourcesWrapper>
  );
};

export default ResourcesView;
