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
  overflow-x: scroll;
  scrollbar-width: none;
  position: relative;
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
  display: none;
  position: absolute;
  z-index: 1;
  height: 100%;
`;

export const StyledWrapperAutosizer = styled.div<{ width: string }>`
  margin: '0 auto';
  width: ${(p) => p.width};
`;
