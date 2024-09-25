/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { ark } from "@ark-ui/react";
import { styled } from "@ndla/styled-system/jsx";

const StyledEmbedWrapper = styled(
  ark.div,
  {
    base: {
      position: "relative",
    },
  },
  { baseComponent: true },
);

export const EmbedWrapper = forwardRef<HTMLDivElement, ComponentPropsWithRef<"div">>((props, ref) => (
  <StyledEmbedWrapper data-embed-wrapper="" {...props} ref={ref} />
));
