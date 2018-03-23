/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { Breadcrumb, BreadcrumbBlock as BreadcrumbBlockUI } from 'ndla-ui';

const items = [
  {
    name: 'Home',
    to: '#',
  },
  {
    name: 'Fag',
    to: '#',
  },
  {
    name: 'Hovedemne',
    to: '#',
  },
  {
    name: 'Underemne',
    to: '#',
  },
  {
    name: 'Tittel på side',
    to: '#',
  },
];

export const BreadcrumbDefault = () => <Breadcrumb items={items} />;

export default BreadcrumbDefault;

export const BreadcrumbBlock = () => (
  <BreadcrumbBlockUI items={items.slice(1)} toTopic={() => '#'} />
);
