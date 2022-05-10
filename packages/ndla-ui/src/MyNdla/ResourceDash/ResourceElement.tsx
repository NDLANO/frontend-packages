/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
// import { useTranslation } from 'react-i18next';

type ResourceElementWrapperProp = {
  type: 'folder' | 'resource';
};

const ResourceElementWrapper = styled.div<ResourceElementWrapperProp>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid rgba(209, 214, 219, 1);
  border-radius: 2px;
  background: ${({ type }) => (type === 'folder' ? '#fafaf9' : '#fff')};
`;

type ResourceElementProps = {
  type: 'folder' | 'resource';
  title: string;
  rightSide?: ReactElement;
  leftSide?: ReactElement;
  description?: string;
  children?: ReactElement;
};

const ResourceElement = ({ type, title, description, leftSide, rightSide, children }: ResourceElementProps) => {
  // const { t } = useTranslation();
  return (
    <ResourceElementWrapper type={type}>
      <div>{leftSide}</div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
      <div>{rightSide}</div>
    </ResourceElementWrapper>
  );
};

export default ResourceElement;
