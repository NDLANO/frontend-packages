/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { PlaceholderProps } from "react-select";
import { TextEllipsis } from "./BaseSingleValue";
import { Option } from "./types";

const BasePlaceholder = <T extends boolean>({ children, innerProps }: PlaceholderProps<Option, T>) => (
  <TextEllipsis {...innerProps}>{children}</TextEllipsis>
);
export default BasePlaceholder;
