/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import config from "../../tsdown.config";

export default {
  ...config,
  entry: ["src/css/index.js", "src/jsx/index.js", "src/patterns/index.js", "src/tokens/index.js"],
};
