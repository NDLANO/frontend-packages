/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLArkProps, ark } from "@ark-ui/react";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps } from "@ndla/styled-system/types";

export const Skeleton = styled(ark.div, {
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
  },
});

export interface SkeletonProps extends HTMLArkProps<"div">, JsxStyleProps {}
