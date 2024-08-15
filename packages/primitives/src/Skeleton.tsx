/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { HTMLArkProps, ark } from "@ark-ui/react";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps } from "@ndla/styled-system/types";

const StyledField = styled(
  ark.div,
  {
    base: {
      animation: "skeleton-pulse",
      backgroundColor: "surface.disabled",
      backgroundClip: "padding-box",
      borderRadius: "xsmall",
      color: "transparent",
      cursor: "default",
      pointerEvents: "none",
      userSelect: "none",
      "&::before, &::after, *": {
        visibility: "hidden",
      },
      _motionReduce: {
        animation: "none",
      },
    },
  },
  { baseComponent: true },
);

export type SkeletonProps = HTMLArkProps<"div"> &
  JsxStyleProps & {
    "aria-label": string;
    fallbackStructure: React.ReactNode;
    loading: Boolean;
  };

type SkeletonFieldProps = HTMLArkProps<"div"> &
  JsxStyleProps & {
    children?: React.ReactNode;
  };

export const SkeletonField = forwardRef<HTMLDivElement, SkeletonFieldProps & JsxStyleProps>(
  ({ children, ...rest }, ref) => (
    <StyledField aria-hidden="true" {...rest} ref={ref}>
      {children}
    </StyledField>
  ),
);

export const SkeletonWrapper = ({ children, fallbackStructure, loading, ...rest }: SkeletonProps) => (
  <ark.div aria-busy={!!loading} {...rest}>
    {loading ? fallbackStructure : children}
  </ark.div>
);

export const Skeleton = styled(
  ark.div,
  {
    base: {
      animation: "skeleton-pulse",
      backgroundColor: "surface.disabled",
      backgroundClip: "padding-box",
      borderRadius: "xsmall",
      color: "transparent",
      cursor: "default",
      pointerEvents: "none",
      userSelect: "none",
      "&::before, &::after, *": {
        visibility: "hidden",
      },
      _motionReduce: {
        animation: "none",
      },
    },
  },
  { baseComponent: true },
);
