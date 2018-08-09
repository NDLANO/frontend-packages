/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

export const LayoutItem = ({ children, layout }) => {
  switch (layout) {
    case 'extend': {
      return (
        <section className="u-10/12@desktop u-push-1/12@desktop u-10/12@tablet u-push-1/12@tablet">
          {children}
        </section>
      );
    }
    case 'center': {
      return (
        <section className="u-4/6@desktop u-push-1/6@desktop u-10/12@tablet u-push-1/12@tablet">
          {children}
        </section>
      );
    }
    case 'full': {
      return <section className="u-1/1@desktop">{children}</section>;
    }
    default: {
      return <section className="o-layout__item">{children}</section>;
    }
  }
};

LayoutItem.propTypes = {
  children: PropTypes.node,
  layout: PropTypes.string,
};

export default LayoutItem;
