/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  colors,
  spacing,
  mq,
  breakpoints,
  fonts,
} from '@ndla/core';
// @ts-ignore
import { Chevron } from '@ndla/icons/common';
// @ts-ignore
import Button from './Button';

const buttonCSS = css`

`;

type Props = {
  inverted?: boolean,
  label: string;
  children: React.ReactNodeArray | React.ReactNode;
  onOpen?: VoidFunction;
  onClose?: VoidFunction;
};

const DropDownButton: React.FC<Props> = ({
  inverted,
  label,
  onOpen,
  onClose,
  children,
}) => {
  const [isOpen, setOpenState] = useState(false);
  return (
    <>
      <Button
        ghostPill
        inverted={inverted}
        css={buttonCSS}
        onClick={() => {
          setOpenState(true);
          if (onOpen) {
            onOpen();
          }
        }}
      >
        {label} <Chevron />
      </Button>
      {isOpen && children}
    </>
  );
};

export default DropDownButton;
