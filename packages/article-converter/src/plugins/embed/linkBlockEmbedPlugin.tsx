/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type LinkBlockMetaData } from "@ndla/types-embed";
import { LinkBlock } from "@ndla/ui";
import { attributesToProps } from "html-react-parser";
import { type PluginType } from "../types";

export const linkBlockPlugin: PluginType = (element, _, opts) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"] as string) as LinkBlockMetaData;

  return <LinkBlock {...data.embedData} path={opts.path} articleLanguage={opts.articleLanguage} />;
};
