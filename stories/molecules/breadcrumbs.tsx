/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Breadcrumb, HeaderBreadcrumb, HomeBreadcrumb } from '@ndla/ui';

const items = [
  {
    name: 'Fag',
    to: '#1',
  },
  {
    name: 'Hovedemne tittel',
    to: '#2',
  },
  {
    name: 'Underemne tittel',
    to: '#3',
  },
  {
    name: 'Tittel på side/ressurs',
    to: '#4',
  },
];

interface BreadcrumbDefaultProps {
  autoCollapse?: boolean;
}

export const BreadcrumbDefault = ({ autoCollapse }: BreadcrumbDefaultProps) => (
  <Breadcrumb autoCollapse={autoCollapse} items={items} />
);

export const BreadcrumbWithHeader = () => {
  return <HeaderBreadcrumb items={items} />;
};

export const BreadcrumbWhiteWithHeader = () => {
  return <HeaderBreadcrumb light items={items} />;
};

export const BreadcrumbWithHome = () => {
  return <HomeBreadcrumb items={items} />;
};

export const BreadcrumbWhiteWithHome = () => {
  return <HomeBreadcrumb items={items} light />;
};

export default BreadcrumbDefault;
