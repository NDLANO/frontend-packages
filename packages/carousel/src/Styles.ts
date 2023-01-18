/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { spacing } from '@ndla/core';

export const slideWrapperCSS = css`
  display: flex;
  position: relative;
  overflow-x: scroll;
  padding: ${spacing.xxsmall} 0;

  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

interface SlideContentProps {
  gap: number;
  margin: number;
}

export const StyledSlideContent = styled.div<SlideContentProps>`
  display: flex;
  gap: ${(p) => p.gap}px;
  margin: 0 ${(p) => p.margin}px;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: block;
  position: absolute;
  top: 30%;
  transform: translateY(-20%);
  z-index: 1;
`;

export const StyledWrapperAutosizer = styled.div<{ width: string }>`
  margin: '0 auto';
  width: ${(p) => p.width};
`;
