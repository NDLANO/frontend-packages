/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useRef } from 'react';
import BEMHelper, { ReturnObject } from 'react-bem-helper';
import { useComponentSize, useIsomorphicLayoutEffect } from '@ndla/hooks';
import { useTranslation } from 'react-i18next';
import BreadcrumbItem from './BreadcrumbItem';
import { BreadcrumbItemI } from './Breadcrumb';

const classes: BEMHelper<ReturnObject> = BEMHelper({
  name: 'breadcrumb-block',
  prefix: 'c-',
});

interface Props {
  children: React.ReactNode;
  items: BreadcrumbItemI[];
}

const BreadcrumbBlock: React.FunctionComponent<Props> = ({ children, items }) => {
  const { t } = useTranslation();
  const olRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  // No idiomatic way of dealing with sets of refs yet
  // See: https://github.com/facebook/react/issues/14072#issuecomment-446777406
  const breadcrumbItemRefs = useRef(new Map()).current;
  const size = useComponentSize(containerRef);

  useIsomorphicLayoutEffect(() => {
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
      if (olRef.current.offsetHeight > 70) {
        el.setMaxWidth('40px');
      }
    });
  }, [size]);

  return (
    <nav {...classes('')} ref={containerRef} aria-label={t('breadcrumb.breadcrumb')}>
      {children}
      <ol {...classes('list')} ref={olRef}>
        {items.map((item, i) => (
          <BreadcrumbItem
            ref={(element) =>
              element === null || i === 0 // skip first item which is never truncated
                ? breadcrumbItemRefs.delete(item.to)
                : breadcrumbItemRefs.set(item.to, element)
            }
            classes={classes}
            key={item.to}
            isCurrent={i === items.length - 1}
            to={item.to}
            name={item.name}
            home={false}
            invertedStyle={false}>
            {item.name}
          </BreadcrumbItem>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbBlock;
