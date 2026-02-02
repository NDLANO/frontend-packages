/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Node, Transforms } from "slate";
import { createPlugin } from "../../core/createPlugin";
import { defaultNormalizer } from "../../utils/defaultNormalizer";
import { HEADING_ELEMENT_TYPE } from "../heading/headingTypes";
import { LIST_ITEM_ELEMENT_TYPE } from "../list/listTypes";
import { NOOP_ELEMENT_TYPE } from "../noop/noopTypes";
import { PARAGRAPH_ELEMENT_TYPE } from "../paragraph/paragraphTypes";
import { isSpanElement } from "./spanQueries";
import { SPAN_ELEMENT_TYPE, SPAN_PLUGIN, type SpanPluginOptions } from "./spanTypes";

export const spanPlugin = createPlugin<typeof SPAN_ELEMENT_TYPE, SpanPluginOptions>({
  name: SPAN_PLUGIN,
  type: SPAN_ELEMENT_TYPE,
  isInline: true,
  options: {
    allowedParents: [
      HEADING_ELEMENT_TYPE,
      PARAGRAPH_ELEMENT_TYPE,
      LIST_ITEM_ELEMENT_TYPE,
      SPAN_ELEMENT_TYPE,
      NOOP_ELEMENT_TYPE,
    ],
  },
  normalize: (editor, node, path, logger, options) => {
    if (isSpanElement(node)) {
      if (Node.string(node) === "") {
        logger.log("Removing empty span");
        Transforms.removeNodes(editor, { at: path });
        return true;
      }
      return defaultNormalizer(editor, node, path, { parent: { allowed: options.allowedParents } }, logger);
    }
    return false;
  },
});
