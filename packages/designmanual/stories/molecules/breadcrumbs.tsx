/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Breadcrumb } from '@ndla/ui';
import { Folder, Link } from '@ndla/icons/editor';
import { HeaderBreadcrumb, HomeBreadcrumb, ActionBreadcrumb } from '@ndla/ui';

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

export const BreadcrumbWithAction = () => {
  return (
    <ActionBreadcrumb
      items={items}
      actionItems={[
        { icon: <Folder />, text: 'Legg til mappe/tag', onClick: () => {} },
        { icon: <Link />, text: 'Kopier lenke til siden', onClick: () => {} },
        { icon: <Folder />, text: 'Fjern', onClick: () => {}, color: 'red' },
      ]}
    />
  );
};

export default BreadcrumbDefault;
