/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useRef, useImperativeHandle, ReactNode, forwardRef } from 'react';
import { ChevronRight } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import BEMHelper, { ReturnObject } from 'react-bem-helper';

interface Props {
  classes: BEMHelper<ReturnObject>;
  isCurrent: boolean;
  children: ReactNode;
  to: string | Partial<Location>;
  home: boolean;
  name: string;
  invertedStyle: boolean;
}

const BreadcrumbItem = forwardRef<any, Props>(
  ({ to, children, classes, isCurrent, home, invertedStyle, name }, ref) => {
    const liRef = useRef<any>();
    useImperativeHandle(ref, () => ({
      setMaxWidth: (maxWidth: number) => {
        liRef.current.children[0].style.maxWidth = maxWidth;
      },
    }));
    return (
      <li {...classes('item', { home, invertedStyle })} ref={liRef}>
        {isCurrent ? (
          <span>{children}</span>
        ) : (
          <SafeLink to={to} aria-label={home ? name : undefined}>
            {children}
          </SafeLink>
        )}
        {!home && <ChevronRight />}
      </li>
    );
  },
);

export default BreadcrumbItem;
