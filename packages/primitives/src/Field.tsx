/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Field } from "@ark-ui/react";
import { styled } from "@ndla/styled-system/jsx";

export const FieldRoot = styled(Field.Root, {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "3xsmall",
  },
});
