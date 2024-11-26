/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from "html-react-parser";
import { PluginType } from "./types";
export const mathPlugin: PluginType = (node) => {
  const { "data-math": mathContent, ...props } = attributesToProps(node.attribs);
  // @ts-expect-error - math is a valid tag
  return <math {...props} dangerouslySetInnerHTML={{ __html: mathContent }} />;
};
