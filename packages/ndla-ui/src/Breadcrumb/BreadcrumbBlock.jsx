/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useRef} from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { useComponentSize, useIsomorphicLayoutEffect } from '@ndla/hooks';
import BreadcrumbItem from './BreadcrumbItem';

const classes = BEMHelper({
  name: 'breadcrumb-block',
  prefix: 'c-',
});

const BreadcrumbBlock = ({ children, items }) => {
  const olRef = useRef(null);
  const containerRef = useRef(null);
  // No idiomatic way of dealing with sets of refs yet
  // See: https://github.com/facebook/react/issues/14072#issuecomment-446777406
  const breadcrumbItemRefs = useRef(new Map()).current;
  const size = useComponentSize(containerRef);

  useIsomorphicLayoutEffect(() => {
    // Create an array of all breadcrumb item refs
    const items = Array.from(breadcrumbItemRefs).map(([key, value]) => value);

    // Clear max width on all items
    items.forEach(el => {
      el.setMaxWidth('none');
    });

    // Set maxWidth on breadcrumb text items iteratively until
    // the ordered list fits on a single line. It's on a single line
    // if the height of the list is less then 70.
    items.forEach(el => {
      if (olRef.current.offsetHeight > 70) {
        el.setMaxWidth('40px');
      }
    });
  }, [size]);

  return (
    <div {...classes('')} ref={containerRef}>
      {children}
      <ol {...classes('list')} ref={olRef}>
        {items.map((item, i) => (
          <BreadcrumbItem
            ref={element =>
              element === null || i === 0 // skip first item which is never truncated
                ? breadcrumbItemRefs.delete(item.to)
                : breadcrumbItemRefs.set(item.to, element)
            }
            classes={classes}
            key={item.to}
            isCurrent={i === items.length - 1}
            to={item.to}>
            {item.name}
          </BreadcrumbItem>
        ))}
      </ol>
    </div>
  );
};

BreadcrumbBlock.propTypes = {
  children: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default BreadcrumbBlock;
