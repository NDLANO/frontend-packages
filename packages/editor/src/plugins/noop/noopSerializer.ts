/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { jsx as slatejsx } from "slate-hyperscript";
import { createSerializer } from "../../core/createSerializer";
import { NOOP_ELEMENT_TYPE } from "./noopTypes";
import { isNoopElement } from "./queries/noopQueries";

export const noopSerializer = createSerializer({
  deserialize: (el, children) => {
    if (el.tagName.toLowerCase() !== "div") return;
    if (el.attributes.getNamedItem("data-noop")?.value === "true") {
      return slatejsx("element", { type: NOOP_ELEMENT_TYPE }, children);
    }
  },
  serialize: (node, children) => {
    if (!isNoopElement(node)) return;
    return children;
  },
});
