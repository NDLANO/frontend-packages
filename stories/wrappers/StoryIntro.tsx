/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';
import { OneColumn, LayoutItem } from '@ndla/ui';

const classes = new BEMHelper({
  name: 'story-intro',
  prefix: 'c-',
});

interface Props {
  title?: string;
  children?: ReactNode;
}

const StoryIntro = ({ title, children }: Props) => (
  <section {...classes()}>
    <OneColumn>
      <LayoutItem layout="center">
        <h1 className="u-heading">{title}</h1>
        {children}
      </LayoutItem>
    </OneColumn>
  </section>
);

export default StoryIntro;
