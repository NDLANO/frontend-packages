/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode, MouseEvent, useState, useEffect, forwardRef } from 'react';
import ButtonV2, { ButtonProps } from './ButtonV2';

interface Props extends ButtonProps {
  children: ReactNode;
  copyNode: ReactNode;
  onClick: (e?: MouseEvent<HTMLButtonElement>) => void;
  showCopyTimer?: number;
}

const CopyButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, copyNode, onClick, showCopyTimer = 4000, ...rest }, ref) => {
    const [showCopyState, setShowCopyState] = useState(false);

    useEffect(() => {
      if (showCopyState) {
        const timer = setTimeout(() => setShowCopyState(false), showCopyTimer);
        return () => clearTimeout(timer);
      }
    }, [showCopyState, showCopyTimer]);

    const handleCopy = (e?: MouseEvent<HTMLButtonElement>) => {
      onClick(e);
      if (!showCopyState) {
        setShowCopyState(true);
      }
    };

    return (
      <ButtonV2 onClick={handleCopy} {...rest} ref={ref}>
        {showCopyState ? copyNode : children}
      </ButtonV2>
    );
  },
);

export default CopyButton;
