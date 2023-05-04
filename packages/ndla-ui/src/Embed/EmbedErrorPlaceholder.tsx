/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { WarningOutline } from '@ndla/icons/common';
import { colors, spacing } from '@ndla/core';
import { Figure, FigureType } from '../Figure';
import { EmbedByline } from '../LicenseByline';
import { EmbedBylineErrorProps } from '../LicenseByline/EmbedByline';

interface Props {
  type: EmbedBylineErrorProps['type'];
  figureType?: FigureType;
  children?: ReactNode;
}

const ErrorPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.brand.greyLighter};
  height: 330px;

  svg {
    fill: ${colors.text.light};
    height: 90%;
    width: 90%;
  }
  &[data-embed-type='audio'] {
    height: 150px;
  }
`;

const StyledFigure = styled(Figure)`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
`;

const EmbedErrorPlaceholder = ({ type, children, figureType }: Props) => {
  return (
    <StyledFigure type={figureType}>
      {children ?? (
        <ErrorPlaceholder data-embed-type={type}>
          <WarningOutline />
        </ErrorPlaceholder>
      )}
      <EmbedByline error type={type} topRounded bottomRounded />
    </StyledFigure>
  );
};

export default EmbedErrorPlaceholder;
