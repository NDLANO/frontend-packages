/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from "html-react-parser";
import { type RelatedContentMetaData } from "@ndla/types-embed";
import { RelatedContentEmbed } from "@ndla/ui";
import { type PluginType } from "../types";

export const relatedContentEmbedPlugin: PluginType = (element, _, opts) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"] as string) as RelatedContentMetaData;
  return (
    <RelatedContentEmbed
      embed={data}
      subject={opts.subject}
      ndlaFrontendDomain={opts.frontendDomain}
      language={opts.articleLanguage}
    />
  );
};
