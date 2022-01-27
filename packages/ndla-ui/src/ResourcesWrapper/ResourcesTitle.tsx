/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import { classes } from './ResourcesWrapper';
import { SubjectBadge } from '../ContentTypeBadge';

interface Props {
  children: ReactNode;
}
const ResourceTitle = ({ children }: Props) => (
  <div {...classes('title-wrapper')}>
    <SubjectBadge size="large" background />
    <h1 {...classes('title')}>{children}</h1>
  </div>
);

export default ResourceTitle;
