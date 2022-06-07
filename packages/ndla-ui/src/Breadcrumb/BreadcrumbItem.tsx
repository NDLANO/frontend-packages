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
import * as H from 'history';

export interface Item {
  to: string;
  name: string;
  index: number;
}

interface Props {
  classes: BEMHelper<ReturnObject>;
  isCurrent: boolean;
  children: ReactNode;
  invertedStyle: boolean;
  item: Item;
  renderItem?: (item: Item, index?: number) => ReactNode;
}

const BreadcrumbItem = forwardRef<any, Props>(
  ({ children, classes, isCurrent, invertedStyle, renderItem, item }, ref) => {
    const liRef = useRef<any>();
    useImperativeHandle(ref, () => ({
      setMaxWidth: (maxWidth: number) => {
        liRef.current.children[0].style.maxWidth = maxWidth;
      },
    }));
    const { to, name, index } = item;
    return (
      <li ref={liRef}>
        {isCurrent ? (
          renderItem ? (
            renderItem(item, index)
          ) : (
            <span>{name}</span>
          )
        ) : (
          <SafeLink to={to} aria-label={home ? name : undefined}>
            {renderItem ? renderItem(item, index) : <span>{name}</span>}
          </SafeLink>
        )}
        {!home && <ChevronRight />}
      </li>
    );
  },
);

export default BreadcrumbItem;
