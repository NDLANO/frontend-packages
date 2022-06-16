/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode, useRef } from 'react';
import { useComponentSize, useIsomorphicLayoutEffect } from '@ndla/hooks';
import { uuid } from '@ndla/util';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import BreadcrumbItem, { IndexedBreadcrumbItem, SimpleBreadcrumbItem } from './BreadcrumbItem';

interface Props {
  items: SimpleBreadcrumbItem[];
  autoCollapse?: boolean;
  collapseFirst?: boolean;
  renderItem?: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
  renderSeparator?: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
}

const BreadcrumbNav = styled.nav``;

const StyledList = styled.ol`
  display: inline-block;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
`;

const Breadcrumb = ({ items, autoCollapse, renderItem, renderSeparator, collapseFirst }: Props) => {
  const { t } = useTranslation();
  const olRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  // No idiomatic way of dealing with sets of refs yet
  // See: https://github.com/facebook/react/issues/14072#issuecomment-446777406
  const breadcrumbItemRefs = useRef(new Map()).current;
  const size = useComponentSize(containerRef);

  useIsomorphicLayoutEffect(() => {
    if (!autoCollapse) {
      return;
    }
    // Create an array of all breadcrumb item refs
    const items = Array.from(breadcrumbItemRefs).map(([key, value]) => value);

    // Clear max width on all items
    items.forEach((el) => {
      el.setMaxWidth('none');
    });

    // Set maxWidth on breadcrumb text items iteratively until
    // the ordered list fits on a single line. It's on a single line
    // if the height of the list is less then 70.
    items.forEach((el) => {
      if (olRef.current.offsetHeight > 60) {
        el.setMaxWidth('40px');
      }
    });
  }, [size]);

  return (
    <BreadcrumbNav ref={containerRef} aria-label={t('breadcrumb.breadcrumb')}>
      <StyledList ref={olRef}>
        {items.map((item, index) => (
          <BreadcrumbItem
            autoCollapse={autoCollapse}
            renderItem={renderItem}
            renderSeparator={renderSeparator}
            ref={(element) =>
              element === null || (!collapseFirst && index === 0) // skip first item which is never truncated
                ? breadcrumbItemRefs.delete(item.to)
                : breadcrumbItemRefs.set(item.to, element)
            }
            key={uuid()}
            totalCount={items.length}
            item={{ ...item, index }}
          />
        ))}
      </StyledList>
    </BreadcrumbNav>
  );
};

export default Breadcrumb;
