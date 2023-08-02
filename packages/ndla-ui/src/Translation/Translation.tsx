/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'translation',
  prefix: 'c-',
});

interface Props {
  children: ReactNode;
  index: number;
}

const Translation = ({ children, index }: Props) => (
  <div {...classes('')}>
    <div {...classes('index')}>{index}</div>
    <dl {...classes('wrapper')}>{children}</dl>
  </div>
);

export default Translation;
