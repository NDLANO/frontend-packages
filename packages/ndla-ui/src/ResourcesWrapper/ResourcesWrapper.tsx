/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';

export const classes = new BEMHelper({
  name: 'resources',
  prefix: 'c-',
});

interface Props {
  header?: ReactNode;
  children: ReactNode;
  subjectPage?: boolean;
  id?: string;
}

const ResourcesWrapper = ({ children, header, subjectPage = false, id }: Props) => (
  <section {...classes('', { subjectPage })} id={id}>
    {header}
    <div {...classes('content')}>{children}</div>
  </section>
);

export default ResourcesWrapper;
