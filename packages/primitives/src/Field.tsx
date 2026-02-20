/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Field, Fieldset } from "@ark-ui/react";
import { styled } from "@ndla/styled-system/jsx";
import type { SystemStyleObject } from "@ndla/styled-system/types";

const rootStyle: SystemStyleObject = {
  display: "flex",
  flexDirection: "column",
  gap: "3xsmall",
};

export const FieldRoot = styled(Field.Root, { base: rootStyle }, { baseComponent: true });

export const FieldsetRoot = styled(Fieldset.Root, { base: rootStyle }, { baseComponent: true });
