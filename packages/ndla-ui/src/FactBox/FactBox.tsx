/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode, MouseEvent } from 'react';
import BEMHelper from 'react-bem-helper';
import Button from '@ndla/button';

const toggleFactBox = (event: MouseEvent<HTMLButtonElement>) => {
  const button = event.currentTarget;
  const aside = button?.previousSibling?.parentElement;
  aside?.classList?.toggle('expanded');
};

const classes = new BEMHelper({
  name: 'factbox',
  prefix: 'c-',
});

interface Props {
  dangerouslySetInnerHTML?: { __html: string };
  children?: ReactNode;
}

const FactBox = ({ children, dangerouslySetInnerHTML }: Props) => (
  <aside {...classes()}>
    <div {...classes('content')} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
      {children}
    </div>
    <Button {...classes('button')} onClick={toggleFactBox} />
  </aside>
);

export default FactBox;
