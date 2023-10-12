/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { breakpoints, mq, spacing } from '@ndla/core';
import BreadcrumbItem, { IndexedBreadcrumbItem, SimpleBreadcrumbItem } from './BreadcrumbItem';

interface Props {
  items: SimpleBreadcrumbItem[];
  renderItem?: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
  renderSeparator?: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
}

const StyledList = styled.ol`
  display: inline;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
  ${mq.range({ until: breakpoints.tablet })} {
    display: flex;
    flex-direction: column;
    gap: ${spacing.xsmall};
  }
`;

const Breadcrumb = ({ items, renderItem, renderSeparator }: Props) => {
  const { t } = useTranslation();

  return (
    <nav aria-label={t('breadcrumb.breadcrumb')}>
      <StyledList>
        {items.map((item, index) => (
          <BreadcrumbItem
            renderItem={renderItem}
            renderSeparator={renderSeparator}
            key={typeof item.to === 'string' ? item.to : item.to.pathname}
            totalCount={items.length}
            item={{ ...item, index }}
          />
        ))}
      </StyledList>
    </nav>
  );
};

export default Breadcrumb;
