/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type EmbedMetaData } from "@ndla/types-embed";
import parse from "html-react-parser";

export const extractEmbedMeta = (embed: string): EmbedMetaData | undefined => {
  const node = parse(embed);
  if (typeof node === "string" || Array.isArray(node) || node.type !== "ndlaembed" || !node.props["data-json"]) {
    return;
  }

  return JSON.parse(node.props["data-json"]) as EmbedMetaData;
};

export const extractEmbedMetas = (embed: string): EmbedMetaData[] => {
  const nodes = parse(embed);

  // There are no embeds in the string
  if (typeof nodes === "string") {
    return [];
  }
  // There is only one embed in the string
  else if (!Array.isArray(nodes) && nodes.type === "ndlaembed" && !!nodes.props["data-json"]) {
    return [JSON.parse(nodes.props["data-json"]) as EmbedMetaData];
  }
  // There are multiple embeds in the string
  else if (
    Array.isArray(nodes) &&
    nodes.length &&
    nodes.every((n) => n.type === "ndlaembed" && !!n.props["data-json"])
  ) {
    return nodes.map((n) => JSON.parse(n.props["data-json"]) as EmbedMetaData);
  } else {
    return [];
  }
};
