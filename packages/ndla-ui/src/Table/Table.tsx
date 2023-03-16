/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import throttle from 'lodash/throttle';
import React, { ReactNode, UIEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import BEMHelper from 'react-bem-helper';

type ScrollPosition = 'start' | 'end' | 'center';

const classes = BEMHelper('c-table');

const MARGIN = 5;

interface Props {
  id?: string;
  children?: ReactNode;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

interface StyledProps {
  show: boolean;
}

const ScrollBorder = styled.div<StyledProps>`
  position: absolute;
  top: 0;
  height: calc(100% - ${spacing.mediumlarge});
  width: 3px;
  background: ${colors.background.dark};
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const RightScrollBorder = styled(ScrollBorder)`
  right: 0;
`;

const LeftScrollBorder = styled(ScrollBorder)`
  left: 0;
`;

const Table = ({ children, id, ...rest }: Props) => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition | undefined>(undefined);
  const tableRef = useRef<HTMLTableElement>(null);

  const checkScrollPosition = useCallback((el: HTMLTableElement) => {
    const { scrollLeft, offsetWidth, scrollWidth, clientWidth } = el;
    const hasScrollbar = scrollWidth > clientWidth;

    if (!hasScrollbar) {
      setScrollPosition(undefined);
      return;
    }

    const isStart = scrollLeft <= MARGIN;
    const isEnd = offsetWidth + scrollLeft >= scrollWidth - MARGIN;

    if (isStart) {
      setScrollPosition('start');
    } else if (isEnd) {
      setScrollPosition('end');
    } else {
      setScrollPosition('center');
    }
  }, []);

  const onScroll = useMemo(
    () =>
      throttle((event: UIEvent<HTMLTableElement>) => {
        const el = event.target as HTMLTableElement | undefined;
        if (el) {
          checkScrollPosition(el);
        }
      }, 100),
    [checkScrollPosition],
  );

  useEffect(() => {
    const el = tableRef.current;
    if (el) {
      checkScrollPosition(el);
    }
  }, [checkScrollPosition]);

  return (
    <div {...classes('wrapper')}>
      <div {...classes('content')}>
        <LeftScrollBorder show={scrollPosition === 'end' || scrollPosition === 'center'} {...classes('left-shadow')} />
        <table ref={tableRef} id={id} onScroll={onScroll} {...classes({ extra: ['o-table'] })} {...rest}>
          {children}
        </table>
        <RightScrollBorder
          show={scrollPosition === 'start' || scrollPosition === 'center'}
          {...classes('right-shadow')}
        />
      </div>
    </div>
  );
};

export default Table;
