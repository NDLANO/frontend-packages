/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React from 'react';

const BreadcrumbsWrapper = styled.div``;

type BreadcrumbsProps = {
  items: {
    title: string;
    url: string;
  }[];
};

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  <BreadcrumbsWrapper>
    {items.map(({ title, url }) => (
      <a key={url} href={url}>
        {title}
      </a>
    ))}
  </BreadcrumbsWrapper>;
};

export default Breadcrumbs;
