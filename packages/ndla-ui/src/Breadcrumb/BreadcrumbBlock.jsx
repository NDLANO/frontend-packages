/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import BreadcrumbItem from './BreadcrumbItem';
import { useWindowSize } from './useWindowSize';

const classes = BEMHelper({
  name: 'breadcrumb-block',
  prefix: 'c-',
});

const BreadcrumbBlock = ({ children, items }) => {
  let ref = useRef(null);
  let size = useWindowSize(ref);

  useLayoutEffect(() => {
    const container = ref.current;

    // Get all breadcrumb text items (a or span) except first element
    const elements = Array.from(container.querySelectorAll('li'))
      .slice(1)
      .map(el => el.children[0]);

    // Clear max width on all elements
    elements.forEach((el, index) => {
      el.style.maxWidth = 'none';
    });

    // Set maxWidth on breadcrumb text items iteratively until
    // the ordered list fits on a single line. Its on a single line
    // if height less then 70.
    let counter = 0;
    while (counter < elements.length && container.offsetHeight > 70) {
      elements[counter].style.maxWidth = '40px';
      counter++;
    }
  }, [size]);

  return (
    <div {...classes('')}>
      {children}
      <ol {...classes('list')} ref={ref}>
        {items.map((item, i) => (
          <BreadcrumbItem
            classes={classes}
            key={i}
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
