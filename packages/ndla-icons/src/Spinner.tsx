/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { colors, spacing, SpacingNames } from "@ndla/core";

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: SpacingNames;
  inverted?: boolean;
}

const SpinnerDiv = styled.div`
  border-radius: 50%;
  animation: spinnerAnimation 0.7s linear infinite;
  display: block;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: ${colors.brand.primary};
  margin: ${spacing.normal} auto;

  &[data-inverted="true"] {
    border-bottom-color: #fff;
  }

  &[data-size="xxsmall"] {
    border-width: calc(${spacing.xxsmall} / 6.5);
    height: ${spacing.xxsmall};
    width: ${spacing.xxsmall};
  }
  &[data-size="xsmall"] {
    border-width: calc(${spacing.xsmall} / 6.5);
    height: ${spacing.xsmall};
    width: ${spacing.xsmall};
  }
  &[data-size="small"] {
    border-width: calc(${spacing.small} / 6.5);
    height: ${spacing.small};
    width: ${spacing.small};
  }
  &[data-size="nsmall"] {
    border-width: calc(${spacing.nsmall} / 6.5);
    height: ${spacing.nsmall};
    width: ${spacing.nsmall};
  }
  &[data-size="normal"] {
    border-width: calc(${spacing.normal} / 6.5);
    height: ${spacing.normal};
    width: ${spacing.normal};
  }
  &[data-size="medium"] {
    border-width: calc(${spacing.medium} / 6.5);
    height: ${spacing.medium};
    width: ${spacing.medium};
  }
  &[data-size="mediumlarge"] {
    border-width: calc(${spacing.mediumlarge} / 6.5);
    height: ${spacing.mediumlarge};
    width: ${spacing.mediumlarge};
  }
  &[data-size="large"] {
    border-width: calc(${spacing.large} / 6.5);
    height: ${spacing.large};
    width: ${spacing.large};
  }
  @keyframes spinnerAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = ({ size = "large", inverted, ...rest }: Props) => (
  <SpinnerDiv data-size={size} data-inverted={!!inverted} {...rest} />
);

export default Spinner;
