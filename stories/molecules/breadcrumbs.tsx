/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Breadcrumb, HomeBreadcrumb } from '@ndla/ui';

const items = [
  {
    name: 'Fag',
    to: '#1',
  },
  {
    name: 'Hovedemne tittel Hovedemne tittel',
    to: '#2',
  },
  {
    name: 'Underemne tittel Underemne tittel Underemne tittel',
    to: '#3',
  },
  {
    name: 'Tittel på side/ressurs',
    to: '#4',
  },
];

export const BreadcrumbDefault = () => <Breadcrumb items={items} />;

export const BreadcrumbWithHome = () => {
  return <HomeBreadcrumb items={items} />;
};

export const BreadcrumbWhiteWithHome = () => {
  return <HomeBreadcrumb items={items} light />;
};

export default BreadcrumbDefault;
