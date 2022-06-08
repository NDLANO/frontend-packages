/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { uuid } from '@ndla/util';
import { useTranslation } from 'react-i18next';
import BreadcrumbItem, { BreadcrumbItemI } from './BreadcrumbItem';

const BreadcrumbList = styled.ol`
  display: inline-block;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
`;

interface Props {
  items: BreadcrumbItemI[];
}

const Breadcrumb = ({ items }: Props) => {
  const { t } = useTranslation();
  return (
    <nav aria-label={t('breadcrumb.breadcrumb')}>
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadcrumbItem
            key={uuid()}
            totalCount={items.length}
            item={{
              ...item,
              index,
            }}
          />
        ))}
      </BreadcrumbList>
    </nav>
  );
};
export default Breadcrumb;
