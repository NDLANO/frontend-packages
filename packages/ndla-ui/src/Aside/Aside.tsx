/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper({
  prefix: 'c-',
  name: 'aside',
});

interface Props {
  dangerouslySetInnerHTML?: {
    __html: string;
  };
  children?: ReactNode;
  narrowScreen?: boolean;
  wideScreen?: boolean;
  alwaysShow?: boolean;
}

const Aside = ({
  children,
  narrowScreen = false,
  dangerouslySetInnerHTML,
  wideScreen = false,
  alwaysShow = false,
}: Props) => {
  const modifiers = {
    narrowScreen,
    wideScreen,
    alwaysShow,
  };
  return (
    <aside {...classes('', modifiers)}>
      <div {...classes('content')} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
        {children}
      </div>
    </aside>
  );
};

export default Aside;
