/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { OneColumn, LayoutItem } from '@ndla/ui';

const classes = new BEMHelper({
  name: 'story-intro',
  prefix: 'c-',
});

const StoryIntro = ({ title, children }) => (
  <section {...classes()}>
    <OneColumn>
      <LayoutItem layout="center">
        <h1 className="u-heading">{title}</h1>
        {children}
      </LayoutItem>
    </OneColumn>
  </section>
);

StoryIntro.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default StoryIntro;
