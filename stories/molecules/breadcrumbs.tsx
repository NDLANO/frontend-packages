/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Breadcrumb, HeaderBreadcrumb, HomeBreadcrumb, ActionBreadcrumb } from '@ndla/ui';
import { DeleteForever, Link } from '@ndla/icons/editor';
import { FolderOutlined } from '@ndla/icons/contentType';

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
        { icon: <FolderOutlined />, text: 'Legg til mappe/tag', onClick: () => {} },
        { icon: <Link />, text: 'Kopier lenke til siden', onClick: () => {} },
        { icon: <DeleteForever />, text: 'Fjern', onClick: () => {}, type: 'danger' },
      ]}
    />
  );
};

export default BreadcrumbDefault;
