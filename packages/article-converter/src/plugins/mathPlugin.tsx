/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from "html-react-parser";
import { type PluginType } from "./types";
export const mathPlugin: PluginType = (node) => {
  const { "data-math": mathContent, ...props } = attributesToProps(node.attribs);
  return (
    // @ts-expect-error - math is a valid tag
    <math xmlns="http://www.w3.org/1998/Math/MathML" {...props} dangerouslySetInnerHTML={{ __html: mathContent }} />
  );
};
