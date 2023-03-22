/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';

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
  height: 100%;
  z-index: 1;
  button {
    right: auto;
    position: absolute;
    top: 50%;
  }
`;

export const StyledWrapperAutosizer = styled.div<{ width: string }>`
  margin: '0 auto';
  width: ${(p) => p.width};
`;
