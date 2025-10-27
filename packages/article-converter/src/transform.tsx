/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse, { type HTMLReactParserOptions } from "html-react-parser";
import { type MetaData } from "@ndla/types-embed";
import { UnknownEmbed } from "@ndla/ui";
import { plugins } from "./plugins";
import { embedPlugins } from "./plugins/embed";
import { type TransformOptions } from "./plugins/types";

export const transform = (content: string, opts: TransformOptions) => {
  const options: HTMLReactParserOptions = {
    replace: (node) => {
      if (!("attribs" in node)) {
        return;
      }
      if (plugins[node.name]) {
        return plugins[node.name](node, options, opts);
      }
      if (node.name === "ndlaembed") {
        if (embedPlugins[node.attribs["data-resource"]]) {
          return embedPlugins[node.attribs["data-resource"]](node, options, opts);
        }
        const embed = JSON.parse(node.attribs["data-json"]) as MetaData<any, any>;
        return <UnknownEmbed embed={embed} />;
      }
    },
  };
  const replaced = parse(content, options);

  return replaced;
};
