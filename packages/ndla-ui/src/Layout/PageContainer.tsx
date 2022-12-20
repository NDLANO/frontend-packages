/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'container',
  prefix: 'o-',
});

interface Props {
  children?: ReactNode;
  background?: boolean;
  backgroundWide?: boolean;
  ndlaFilm?: boolean;
  learningPath?: boolean;
}

export const PageContainer = ({
  children,
  background = false,
  backgroundWide = false,
  ndlaFilm = false,
  learningPath = false,
}: Props) => <div {...classes('', { background, backgroundWide, ndlaFilm, learningPath })}>{children}</div>;

export default PageContainer;
