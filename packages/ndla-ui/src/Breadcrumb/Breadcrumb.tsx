/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import BEMHelper, { ReturnObject } from 'react-bem-helper';
import { uuid } from '@ndla/util';
import { withTranslation, WithTranslation } from 'react-i18next';
// @ts-ignore
import { Home } from '@ndla/icons/common';
import BreadcrumbItem from './BreadcrumbItem';

const classes: BEMHelper<ReturnObject> = BEMHelper({
  name: 'breadcrumb',
  prefix: 'c-',
});

export interface BreadcrumbItemI {
  to: string;
  name: string;
}

interface Props {
  children: React.ReactNode;
  items: BreadcrumbItemI[];
  invertedStyle: boolean;
}

const Breadcrumb: React.FunctionComponent<Props & WithTranslation> = ({ children, items, invertedStyle, t }) => (
  <nav aria-label={t('breadcrumb.breadcrumb')}>
    {children}
    <ol {...classes('list')}>
      {items.map((item, i) => (
        <BreadcrumbItem
          invertedStyle={invertedStyle}
          classes={classes}
          home={i === 0}
          key={uuid()}
          isCurrent={i === items.length - 1}
          to={item.to}
          name={item.name}>
          {i === 0 ? <Home className="c-icon--20" /> : item.name}
        </BreadcrumbItem>
      ))}
    </ol>
  </nav>
);

export default withTranslation()(Breadcrumb);
