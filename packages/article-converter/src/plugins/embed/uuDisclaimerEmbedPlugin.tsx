/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps, domToReact } from "html-react-parser";
import { UuDisclaimerMetaData } from "@ndla/types-embed";
import { UuDisclaimerEmbed } from "@ndla/ui";
import { PluginType } from "../types";

export const uuDisclaimerEmbedPlugin: PluginType = (element, opts) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"]) as UuDisclaimerMetaData;
  return <UuDisclaimerEmbed embed={data}>{domToReact(element.children, opts)}</UuDisclaimerEmbed>;
};
