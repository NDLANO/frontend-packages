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
    case 'extend' : {
      return <section className="u-5/6@desktop u-pull-half">{children}</section>;
    }
    case 'center' : {
      return <section className="u-4/6@desktop u-push-1/6@desktop">{children}</section>;
    }
    default : {
      return <section>{children}</section>;
    }
  }
  // const mobileMod = mobile ? `u-${mobile}@mobile` : null;
  // const tabletMod = tablet ? `u-${tablet}@tablet` : null;
  // const desktopMod = desktop ? `u-${desktop}@desktop` : null;
  // const pushDesktopMod = pushDesktop ? `u-push-${pushDesktop}@desktop` : null;
  // const pullDesktopMod = pullDesktop ? `u-pull-${pullDesktop}@desktop` : null;
  // const classes = classNames('o-layout__item', mobileMod, tabletMod, desktopMod, pushDesktopMod, pullDesktopMod, ['', className]);
};

LayoutItem.propTypes = {
  children: PropTypes.node,
  layout: PropTypes.string,
};

export default LayoutItem;
