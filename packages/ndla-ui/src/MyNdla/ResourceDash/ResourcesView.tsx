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

const ResourcesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; 0;
`;

export const ResourcesView = () => {
  return (
    <ResourcesWrapper>
      <ResourceElement
        type="folder"
        title="Example folder"
        leftSide={<img src="http://placekitten.com/200/200" />}
        rightSide={<span>#tag</span>}
        description="some description"
      >
        <p>Im a child.. insert content</p>
      </ResourceElement>
      <ResourceElement
        type="resource"
        title="Example Resource"
        leftSide={<img src="http://placekitten.com/200/200" />}
        rightSide={<span>#tag</span>}
        description="some description"
      >
        <p>Im a child.. insert content</p>
      </ResourceElement>
    </ResourcesWrapper>
  );
};

export default ResourcesView;
